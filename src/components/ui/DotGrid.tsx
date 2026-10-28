"use client";

import { Mesh, Program, Renderer, Triangle, Vec2 } from "ogl";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

type DotGridProps = {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  darkBaseColor?: string;
  activeColor?: string;
  proximity?: number;
};

const vertex = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uDotSize;
  uniform float uGap;
  uniform float uProximity;
  uniform float uClickTime;
  uniform vec2 uClickOrigin;
  uniform vec3 uBaseColor;
  uniform vec3 uActiveColor;
  varying vec2 vUv;

  void main() {
    vec2 frag = vUv * uResolution;
    vec2 cell = mod(frag, uGap) - uGap * 0.5;
    float point = 1.0 - smoothstep(uDotSize, uDotSize + 1.0, length(cell));

    float hover = 1.0 - smoothstep(0.0, uProximity, distance(frag, uMouse));
    float elapsed = uClickTime;
    float waveRadius = elapsed * 360.0;
    float wave = 1.0 - smoothstep(0.0, 22.0, abs(distance(frag, uClickOrigin) - waveRadius));
    wave *= 1.0 - smoothstep(0.0, 1.1, elapsed);

    float energy = clamp(hover + wave, 0.0, 1.0);
    vec3 color = mix(uBaseColor, uActiveColor, energy);
    float alpha = point * mix(0.48, 0.95, energy);
    gl_FragColor = vec4(color, alpha);
  }
`;

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;
  const number = Number.parseInt(normalized, 16);
  return [
    ((number >> 16) & 255) / 255,
    ((number >> 8) & 255) / 255,
    (number & 255) / 255,
  ];
}

export function DotGrid({
  dotSize = 1.4,
  gap = 28,
  baseColor = "#D9B8C6",
  darkBaseColor = "#121212",
  activeColor = "#C2185B",
  proximity = 150,
}: DotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    container.appendChild(gl.canvas);

    const dpr = renderer.dpr;
    const mouse = new Vec2(-10_000, -10_000);
    const clickOrigin = new Vec2(-10_000, -10_000);
    let clickedAt = -10;
    let frame = 0;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let reducedMotion = motionPreference.matches;

    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      uniforms: {
        uResolution: { value: new Vec2(1, 1) },
        uMouse: { value: mouse },
        uDotSize: { value: dotSize * dpr },
        uGap: { value: gap * dpr },
        uProximity: { value: proximity * dpr },
        uClickTime: { value: 10 },
        uClickOrigin: { value: clickOrigin },
        uBaseColor: {
          value: hexToRgb(resolvedTheme === "dark" ? darkBaseColor : baseColor),
        },
        uActiveColor: { value: hexToRgb(activeColor) },
      },
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const render = () => {
      frame = 0;
      const elapsed = performance.now() / 1000 - clickedAt;
      program.uniforms.uClickTime.value = reducedMotion ? 10 : elapsed;
      renderer.render({ scene: mesh });

      if (!reducedMotion && clickedAt >= 0 && elapsed < 1.1) {
        frame = requestAnimationFrame(render);
      }
    };
    const scheduleRender = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(render);
    };

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      program.uniforms.uResolution.value.set(gl.canvas.width, gl.canvas.height);
      scheduleRender();
    };
    const updatePointer = (event: PointerEvent, target: Vec2) => {
      const rect = container.getBoundingClientRect();
      target.set(
        (event.clientX - rect.left) * dpr,
        (rect.bottom - event.clientY) * dpr,
      );
    };
    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion || event.pointerType === "touch") return;
      updatePointer(event, mouse);
      scheduleRender();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (reducedMotion) return;
      updatePointer(event, mouse);
      updatePointer(event, clickOrigin);
      clickedAt = performance.now() / 1000;
      scheduleRender();
    };
    const onPointerLeave = () => {
      mouse.set(-10_000, -10_000);
      scheduleRender();
    };
    const onMotionPreferenceChange = () => {
      reducedMotion = motionPreference.matches;
      if (reducedMotion) {
        clickedAt = -10;
        mouse.set(-10_000, -10_000);
      }
      scheduleRender();
    };
    const onVisibilityChange = () => {
      if (document.hidden && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        scheduleRender();
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("blur", onPointerLeave);
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    motionPreference.addEventListener("change", onMotionPreferenceChange);
    resize();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("blur", onPointerLeave);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    activeColor,
    baseColor,
    darkBaseColor,
    dotSize,
    gap,
    proximity,
    resolvedTheme,
  ]);

  return (
    <div ref={containerRef} className="h-full w-full" aria-hidden="true" />
  );
}
