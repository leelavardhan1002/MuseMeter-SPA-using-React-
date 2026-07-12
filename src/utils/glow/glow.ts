/*
 * Glow utility — applies a soft colored glow effect as a background layer.
 *
 * Usage:
 *   import { glowStyle, type GlowVariant } from "@/utils/glow";
 *   <div style={{ ...existingStyles, ...glowStyle("#5896f0", "vertical") }} />
 *
 * Variants:
 *   "vertical"      — top + bottom edges fading inward to center
 *   "horizontal"    — left + right edges fading inward to center
 *   "topToBottom"   — top edge fading down
 *   "bottomToTop"   — bottom edge fading up
 *   "leftToRight"   — left edge fading right
 *   "rightToLeft"   — right edge fading left
 *   "radial"        — center radiating outward to edges
 *   "corners"       — all four corners fading inward
 */

import type { CSSProperties } from "react";

export type GlowVariant =
    | "vertical"
    | "horizontal"
    | "topToBottom"
    | "bottomToTop"
    | "leftToRight"
    | "rightToLeft"
    | "radial"
    | "corners";

export interface GlowOptions {
    /** Opacity at the strongest point (0–1). Default: 0.20 */
    intensity?: number;
    /** How far the glow reaches before fading out (0–100%). Default: 50 */
    spread?: number;
}

export function glowStyle(
    color: string,
    variant: GlowVariant,
    options: GlowOptions = {},
): Pick<CSSProperties, "backgroundImage"> {
    const { intensity = 0.2, spread = 50 } = options;

    const hex = Math.round(intensity * 255)
        .toString(16)
        .padStart(2, "0");

    const mid = Math.round(intensity * 0.4 * 255)
        .toString(16)
        .padStart(2, "0");

    const stop = `${spread}%`;

    const gradients: Record<GlowVariant, string> = {
        vertical: [
            `linear-gradient(to bottom, ${color}${hex} 0%, transparent ${stop})`,
            `linear-gradient(to top, ${color}${hex} 0%, transparent ${stop})`,
        ].join(", "),

        horizontal: [
            `linear-gradient(to right, ${color}${hex} 0%, transparent ${stop})`,
            `linear-gradient(to left, ${color}${hex} 0%, transparent ${stop})`,
        ].join(", "),

        topToBottom: `linear-gradient(to bottom, ${color}${hex} 0%, ${color}${mid} 30%, transparent ${stop})`,

        bottomToTop: `linear-gradient(to top, ${color}${hex} 0%, ${color}${mid} 30%, transparent ${stop})`,

        leftToRight: `linear-gradient(to right, ${color}${hex} 0%, ${color}${mid} 30%, transparent ${stop})`,

        rightToLeft: `linear-gradient(to left, ${color}${hex} 0%, ${color}${mid} 30%, transparent ${stop})`,

        radial: `radial-gradient(ellipse at center, ${color}${hex} 0%, ${color}${mid} 30%, transparent ${stop})`,

        corners: [
            `radial-gradient(ellipse at top left, ${color}${hex} 0%, transparent ${stop})`,
            `radial-gradient(ellipse at top right, ${color}${hex} 0%, transparent ${stop})`,
            `radial-gradient(ellipse at bottom left, ${color}${hex} 0%, transparent ${stop})`,
            `radial-gradient(ellipse at bottom right, ${color}${hex} 0%, transparent ${stop})`,
        ].join(", "),
    };

    return { backgroundImage: gradients[variant] };
}
