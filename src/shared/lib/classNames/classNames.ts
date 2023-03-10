
type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, additions: string[] = []): string{
	return [
		cls,
		...additions,
		...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([className]) => className)
	].filter(Boolean).join(' ');
}
