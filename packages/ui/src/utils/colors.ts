export function color(name: string, scale: number | string = 0) {
  return `var(--color-${name}-${scale})`
}
export function semantic(
  property: string,
  variant: string,
  scale?: number | string,
) {
  const statement = `var(--${property}-${variant}`
  return scale ? `${statement}-${scale})` : `${statement})`
}
