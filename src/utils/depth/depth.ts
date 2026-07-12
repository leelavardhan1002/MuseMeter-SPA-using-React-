/*
 * Depth utility — gives any element a 3D look via layered box-shadows,
 * subtle gradients, and optional transforms.
 *
 * Usage:
 *   import { depthStyle } from "@/utils/depth";
 *   const theme = useTheme();
 *   <div style={depthStyle(2, theme.palette.depth)}>
 */

import { type CSSProperties } from "react";
import type { DepthTokens } from "../../theme/types";

export type DepthLevel = 0 | 1 | 2 | 3 | "pressed";

export function depthStyle(level: DepthLevel, d: DepthTokens): CSSProperties {
    switch (level) {
        case 0:
            return {
                boxShadow: "none",
                border: `1px solid ${d.border}`,
                backgroundImage: "none",
            };
        case 1:
            return {
                boxShadow: [
                    `0 1px 2px ${d.shadowAmbient}`,
                    `0 2px 4px -1px ${d.shadowSoft}`,
                    `inset 0 1px 0 ${d.highlight}`,
                    `inset 0 -1px 0 ${d.shadowEdge}`,
                ].join(", "),
                border: `1px solid ${d.border}`,
                backgroundImage: `linear-gradient(180deg, ${d.gradientTop} 0%, ${d.gradientBottom} 100%)`,
            };
        case 2:
            return {
                boxShadow: [
                    `0 2px 4px ${d.shadowAmbient}`,
                    `0 6px 12px -2px ${d.shadowMedium}`,
                    `0 12px 24px -4px ${d.shadowDeep}`,
                    `inset 0 2px 0 ${d.highlight}`,
                    `inset 0 -2px 0 ${d.shadowEdge}`,
                    `inset 2px 0 0 ${d.highlightSide}`,
                    `inset -2px 0 0 ${d.shadowSide}`,
                ].join(", "),
                border: `1px solid ${d.border}`,
                backgroundImage: `linear-gradient(180deg, ${d.gradientTop} 0%, ${d.gradientBottom} 100%)`,
            };
        case 3:
            return {
                boxShadow: [
                    `0 4px 8px ${d.shadowAmbient}`,
                    `0 12px 24px -4px ${d.shadowMedium}`,
                    `0 24px 48px -8px ${d.shadowDeep}`,
                    `0 0 0 1px ${d.ring}`,
                    `inset 0 2px 0 ${d.highlight}`,
                    `inset 0 -2px 0 ${d.shadowEdge}`,
                    `inset 2px 0 0 ${d.highlightSide}`,
                    `inset -2px 0 0 ${d.shadowSide}`,
                ].join(", "),
                border: `1px solid ${d.border}`,
                backgroundImage: `linear-gradient(180deg, ${d.gradientTop} 0%, ${d.gradientBottom} 100%)`,
            };
        case "pressed":
            return {
                boxShadow: [
                    `inset 0 2px 6px ${d.shadowMedium}`,
                    `inset 0 1px 2px ${d.shadowAmbient}`,
                    `0 0 0 1px ${d.ring}`,
                ].join(", "),
                border: `1px solid ${d.borderInset}`,
                backgroundImage: `linear-gradient(180deg, ${d.gradientBottom} 0%, ${d.gradientTop} 100%)`,
            };
    }
}
