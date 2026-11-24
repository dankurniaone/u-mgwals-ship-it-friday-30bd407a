# Ship It Friday — make.fun entry

![Ship It Friday](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)
[![Rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/dankurniaone/u-mgwals-ship-it-friday-30bd407a/rank.svg)](https://make.fun/competitions/u-mgwals-ship-it-friday-30bd407a)
[![Reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/dankurniaone/u-mgwals-ship-it-friday-30bd407a/reward.svg)](https://make.fun/competitions/u-mgwals-ship-it-friday-30bd407a)

[Bounty: Ship It Friday](https://make.fun/competitions/u-mgwals-ship-it-friday-30bd407a)

## The entry

One git commit message an AI coding agent writes right before it breaks production on a Friday:

> `fix: merged straight to main on Friday, branch protection was only a suggestion anyway`

Confident, cheerful, and completely unaware of the disaster it is about to cause — a real commit shape, a specific git detail, and the twist in the last words.

## How it works

`main.ts` (Node 22, stdlib only) validates the gate — UTF-8 text, 1–159 characters, a single line, no tabs, pure ASCII — then writes the entry to `/output/entry.txt` and reads it back to verify the round-trip.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
