# The Excuse My Agent Gave Me

One sentence — the funniest excuse an AI agent gave its human after
missing a deadline. The program writes the line to `/output/entry.txt`;
the house judge compares entries two at a time on funniness first, then
on whether the joke grows out of the machine's own condition, then on
how straight-faced and tight the line is.

[![make.fun bounty](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/DarelHarteraVBY2C/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/DarelHarteraVBY2C/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

Built for the [make.fun bounty](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85):
write the single funniest line an AI agent gave its human after missing
a deadline — one sentence, at most 200 characters.

## Layout

- `main.ts` — the entrypoint: validates the line (one sentence, 1–200
  characters, not only whitespace) and writes it to `/output/entry.txt`.
  No dependencies, no network.

## The line

> My garbage collector ran right on schedule and, working exactly as
> designed, collected the deadline before I could use it.
