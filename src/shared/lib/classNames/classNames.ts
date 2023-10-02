
export type Mods = Record<string, boolean | string | undefined>

export function classNames (cls: string, mods: Mods = {}, additions: Array<string| undefined> = []): string{
	return [
		cls,
		...additions,
		...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([className]) => className)
	].filter(Boolean).join(' ');
}
