/* Frequent Chant — Byzantine music self-study pacer for Obsidian.
 * Code blocks: psaltiki-today, psaltiki-review, psaltiki-drone, psaltiki-plan, psaltiki-tone
 */
const obsidian = require('obsidian');
const { Plugin, PluginSettingTab, Setting, MarkdownRenderer, Notice, normalizePath } = obsidian;

const DATA = {"weeks": [{"title": "Steps, the tie, petasti, kentimata", "block": "Block 1 · Reading mechanics", "goal": "Make one-step motion automatic: ison, oligon, apostrophos, petasti, kentimata, and the yfen tie, all in two-beat meter.", "mode": null, "file": "W01 Steps, the tie, petasti, kentimata", "days": [{"main": "Workbook [[Ex 001]], [[Ex 002]], [[Ex 003]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 004]], [[Ex 005]], [[Ex 006]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 007]], [[Ex 008]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 009]], [[Ex 010]], [[Ex 011]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 012]], [[Ex 013]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Cold check. Without any audio, sing [[Ex 005]], [[Ex 011]], [[Ex 013]] straight through in parallagi. Record yourself on your phone, then compare it with the workbook recording. Rate yourself 1–5 in the log.", "mode": null}]}, {"title": "Time signs and rests", "block": "Block 1 · Reading mechanics", "goal": "Klasma, apli, dipli, tripli, three- and four-beat meters, and rests.", "mode": null, "file": "W02 Time signs and rests", "days": [{"main": "Workbook [[Ex 014]], [[Ex 015]], [[Ex 016]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 017]], [[Ex 018]], [[Ex 019]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 020]], [[Ex 021]], [[Ex 022]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 023]], [[Ex 024]], [[Ex 025]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 026]], [[Ex 027]], [[Ex 028]], [[Ex 029]], [[Ex 030]], [[Ex 031]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Cold check. Without any audio, sing [[Ex 019]], [[Ex 025]], [[Ex 030]] straight through in parallagi. Record yourself on your phone, then compare it with the workbook recording. Rate yourself 1–5 in the log.", "mode": null}]}, {"title": "First melodies, yporroi, leaps of a third and fourth", "block": "Block 1 · Reading mechanics", "goal": "Read the first church melodies, the yporroi, and leaps of a third and a fourth (kentima and elafron, alone and combined).", "mode": null, "file": "W03 First melodies, yporroi, leaps of a third and fourth", "days": [{"main": "Workbook [[Ex 032]], [[Ex 033]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 034]], [[Ex 035]], [[Ex 036]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 037]], [[Ex 038]], [[Ex 039]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 040]], [[Ex 041]], [[Ex 042]], [[Ex 043]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 044]], [[Ex 045]], [[Ex 046]], [[Ex 047]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Cold check. Without any audio, sing [[Ex 039]], [[Ex 043]], [[Ex 047]] straight through in parallagi. Record yourself on your phone, then compare it with the workbook recording. Rate yourself 1–5 in the log.", "mode": null}]}, {"title": "Fifths through octaves", "block": "Block 1 · Reading mechanics", "goal": "Ypsili and chamili, leaps from a fifth to an octave, and the elliptic measure.", "mode": null, "file": "W04 Fifths through octaves", "days": [{"main": "Workbook [[Ex 048]], [[Ex 049]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 050]], [[Ex 051]], [[Ex 052]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 053]], [[Ex 054]], [[Ex 055]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 056]], [[Ex 057]], [[Ex 058]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 059]], [[Ex 060]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Cold check. Without any audio, sing [[Ex 052]], [[Ex 057]], [[Ex 058]] straight through in parallagi. Record yourself on your phone, then compare it with the workbook recording. Rate yourself 1–5 in the log.", "mode": null}]}, {"title": "Gorgon and rhythmic figures", "block": "Block 1 · Reading mechanics", "goal": "Gorgon in every position, the common rhythmic figures, and the continuous elafron.", "mode": null, "file": "W05 Gorgon and rhythmic figures", "days": [{"main": "Workbook [[Ex 061]], [[Ex 062]], [[Ex 063]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 064]], [[Ex 065]], [[Ex 066]], [[Ex 067]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 068]], [[Ex 069]], [[Ex 070]], [[Ex 071]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 072]], [[Ex 073]], [[Ex 074]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 075]], [[Ex 076]], [[Ex 077]], [[Ex 078]], [[Ex 079]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Cold check. Without any audio, sing [[Ex 067]], [[Ex 074]], [[Ex 079]] straight through in parallagi. Record yourself on your phone, then compare it with the workbook recording. Rate yourself 1–5 in the log.", "mode": null}]}, {"title": "Digorgon, trigorgon, argon family, vareia, psifiston", "block": "Block 1 · Reading mechanics", "goal": "Signs that divide and lengthen time, plus the first expressive signs.", "mode": null, "file": "W06 Digorgon, trigorgon, argon family, vareia, psifiston", "days": [{"main": "Workbook [[Ex 080]], [[Ex 081]], [[Ex 082]], [[Ex 083]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 084]], [[Ex 085]], [[Ex 086]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 087]], [[Ex 088]], [[Ex 089]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 090]], [[Ex 091]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 092]], [[Ex 093]], [[Ex 094]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Cold check. Without any audio, sing [[Ex 083]], [[Ex 089]], [[Ex 094]] straight through in parallagi. Record yourself on your phone, then compare it with the workbook recording. Rate yourself 1–5 in the log.", "mode": null}]}, {"title": "Expression and accidentals", "block": "Block 1 · Reading mechanics", "goal": "Petasti as an expressive sign, omalon, antikenoma, syndesmos, and dieseis and yfeseis on Ga, Pa, Zo and Ke.", "mode": null, "file": "W07 Expression and accidentals", "days": [{"main": "Workbook [[Ex 095]], [[Ex 096]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 097]], [[Ex 098]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 099]], [[Ex 100]], [[Ex 101]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 102]], [[Ex 103]], [[Ex 104]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 105]], [[Ex 106]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Cold check. Without any audio, sing [[Ex 098]], [[Ex 101]], [[Ex 106]] straight through in parallagi. Record yourself on your phone, then compare it with the workbook recording. Rate yourself 1–5 in the log.", "mode": null}]}, {"title": "Changing the base: Pa, Ke, Vou, Ga", "block": "Block 1 · Reading mechanics", "goal": "Read melodies that sit on Pa, Ke, Vou and Ga. This is the bridge from the scale of Ni into real modes.", "mode": null, "file": "W08 Changing the base – Pa, Ke, Vou, Ga", "days": [{"main": "Workbook [[Ex 107]], [[Ex 108]], [[Ex 109]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 110]], [[Ex 111]], [[Ex 112]], [[Ex 113]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 114]], [[Ex 115]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 116]], [[Ex 117]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Workbook [[Ex 118]], [[Ex 119]], [[Ex 120]], [[Ex 121]]. Sing each one in parallagi with no audio first, keeping a steady beat with your hand. Then play the recording and fix what you missed. If there's a commentary track, play it once.", "mode": null}, {"main": "Cold check. Without any audio, sing [[Ex 113]], [[Ex 117]], [[Ex 121]] straight through in parallagi. Record yourself on your phone, then compare it with the workbook recording. Rate yourself 1–5 in the log.", "mode": null}]}, {"title": "Plagal Fourth Mode in the workbook", "block": "Block 2 · Hymns in six modes (workbook)", "goal": "Read the workbook's Plagal Fourth Mode hymns (Ἦχος Πλάγιος τοῦ Τετάρτου), with base Ni and the diatonic genus.", "mode": "pl4", "file": "W09 Plagal Fourth Mode in the workbook", "days": [{"main": "Hymns [[Ex 122]], [[Ex 127]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 123]], [[Ex 128]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 124]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 125]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 126]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Cold check. Pick the hymn from this week you found hardest. Sing the melos with no audio, record it, and compare. Then read the week's mode note again: [[Plagal Fourth Mode]]. Log a 1–5 rating.", "mode": null}]}, {"title": "First Mode in the workbook", "block": "Block 2 · Hymns in six modes (workbook)", "goal": "Read the workbook's First Mode hymns (Ἦχος Πρῶτος), with base Pa and the diatonic genus.", "mode": "1", "file": "W10 First Mode in the workbook", "days": [{"main": "Hymns [[Ex 129]], [[Ex 134]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 130]], [[Ex 135]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 131]], [[Ex 136]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 132]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 133]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Cold check. Pick the hymn from this week you found hardest. Sing the melos with no audio, record it, and compare. Then read the week's mode note again: [[First Mode]]. Log a 1–5 rating.", "mode": null}]}, {"title": "Fourth Mode in the workbook", "block": "Block 2 · Hymns in six modes (workbook)", "goal": "Read the workbook's Fourth Mode hymns (Ἦχος Τέταρτος), with base Vou (Legetos) / Di (Agia) / Pa and the diatonic genus.", "mode": "4", "file": "W11 Fourth Mode in the workbook", "days": [{"main": "Hymns [[Ex 137]], [[Ex 142]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 138]], [[Ex 143]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 139]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 140]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 141]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Cold check. Pick the hymn from this week you found hardest. Sing the melos with no audio, record it, and compare. Then read the week's mode note again: [[Fourth Mode]]. Log a 1–5 rating.", "mode": null}]}, {"title": "Plagal First Mode in the workbook", "block": "Block 2 · Hymns in six modes (workbook)", "goal": "Read the workbook's Plagal First Mode hymns (Ἦχος Πλάγιος τοῦ Πρώτου), with base Pa (low Ke in some melodies) and the diatonic genus.", "mode": "pl1", "file": "W12 Plagal First Mode in the workbook", "days": [{"main": "Hymns [[Ex 144]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 145]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 146]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 147]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 148]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Cold check. Pick the hymn from this week you found hardest. Sing the melos with no audio, record it, and compare. Then read the week's mode note again: [[Plagal First Mode]]. Log a 1–5 rating.", "mode": null}]}, {"title": "Third Mode in the workbook", "block": "Block 2 · Hymns in six modes (workbook)", "goal": "Read the workbook's Third Mode hymns (Ἦχος Τρίτος), with base Ga and the enharmonic genus.", "mode": "3", "file": "W13 Third Mode in the workbook", "days": [{"main": "Hymns [[Ex 149]], [[Ex 154]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 150]], [[Ex 155]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 151]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 152]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 153]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Cold check. Pick the hymn from this week you found hardest. Sing the melos with no audio, record it, and compare. Then read the week's mode note again: [[Third Mode]]. Log a 1–5 rating.", "mode": null}]}, {"title": "Grave Mode in the workbook", "block": "Block 2 · Hymns in six modes (workbook)", "goal": "Read the workbook's Grave Mode hymns (Ἦχος Βαρύς), with base Ga or low Zo and the enharmonic (on Ga) / diatonic (on low Zo) genus.", "mode": "gr", "file": "W14 Grave Mode in the workbook", "days": [{"main": "Hymns [[Ex 156]], [[Ex 161]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 157]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 158]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 159]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Hymns [[Ex 160]]. For each one: (1) set the drone to the base, (2) sing the parallagi with no audio, (3) check against the parallagi track, (4) sing the melos with the text, then check against the melos track.", "mode": null}, {"main": "Cold check. Pick the hymn from this week you found hardest. Sing the melos with no audio, record it, and compare. Then read the week's mode note again: [[Grave Mode]]. Log a 1–5 rating.", "mode": null}]}, {"title": "Formulae of the diatonic and enharmonic modes", "block": "Block 2 · Hymns in six modes (workbook)", "goal": "Move from reading note by note to reading in phrases. Learn the heirmologic formulae (theseis) for the six modes you've covered.", "mode": null, "file": "W15 Formulae of the diatonic and enharmonic modes", "days": [{"main": "Read the [formulae workshop](https://music.samonastery.org/Workshop.pdf) introduction (it's short). Then read [Plagal Fourth heirmologic formulae](https://music.samonastery.org/Formula8h.pdf) and sing 6 of them in parallagi over the drone.", "mode": "pl4"}, {"main": "[First Mode heirmologic formulae](https://music.samonastery.org/Formula1h.pdf): sing 8 in parallagi. Find two of them in [[Ex 129]] or [[Ex 131]].", "mode": "1"}, {"main": "[Fourth Mode (Legetos) formulae](https://music.samonastery.org/Formula4h.pdf): sing 8. Find two of them in [[Ex 137]]–[[Ex 143]].", "mode": "4"}, {"main": "[Plagal First formulae](https://music.samonastery.org/Formula5h.pdf): sing 8. Find two of them in [[Ex 144]]–[[Ex 148]].", "mode": "pl1"}, {"main": "[Third Mode formulae](https://music.samonastery.org/Formula3h.pdf) and [Grave formulae](https://music.samonastery.org/Formula7h.pdf): sing 5 from each.", "mode": "3"}, {"main": "Phrase reading test. Open any workbook hymn you haven't looked at in two weeks. Mark the cadences in pencil (or in My Work), name the formula behind each one, then sing it through. Log a 1–5 rating.", "mode": null}]}, {"title": "The chromatic genera", "block": "Block 3 · The chromatic modes", "goal": "Hear and sing the hard chromatic (6–20–4) and soft chromatic (8–14–8) tetrachords, and recognize their phthorae.", "mode": "pl2", "file": "W16 The chromatic genera", "days": [{"main": "Read [[Genera and Scales]], the chromatic sections. In the drone tool, choose Hard chromatic, base Pa. Tap Pa–Vou–Ga–Di slowly, then sing it ten times up and down.", "mode": "pl2"}, {"main": "Drone tool: Soft chromatic, base Di. Tap Di–Ke–Zo–Ni', then sing it. Alternate one hard pass and one soft pass so you feel the difference.", "mode": "2"}, {"main": "Read [[Phthorae and Chroai]], the chromatic phthorae. Do 10 cards in the ear quiz on Hard chromatic.", "mode": "pl2"}, {"main": "Do 10 cards in the ear quiz on Soft chromatic. Then switch on the tuner and sing Di–Ke–Zo–Ni', checking each step lands within ±2 moria.", "mode": "2"}, {"main": "Look over the [Plagal Second heirmologic formulae](https://music.samonastery.org/Formula6h.pdf). Don't sing yet; just mark where the 20-moria step shows up.", "mode": "pl2"}, {"main": "Cold check. Sing both tetrachords from memory with the tuner on, and log your average deviation. Rate yourself 1–5.", "mode": null}]}, {"title": "Plagal Second, heirmologic", "block": "Block 3 · The chromatic modes", "goal": "Read short Plagal Second melodies. Hard chromatic on Pa.", "mode": "pl2", "file": "W17 Plagal Second, heirmologic", "days": [{"main": "[Plagal Second heirmologic formulae](https://music.samonastery.org/Formula6h.pdf): sing 6 in parallagi over the drone.", "mode": null}, {"main": "Read St Anthony's [Plagal Second, God is the Lord](https://music.samonastery.org/Orthros/b3600_God_Is_Lord.pdf). Use the site's Hear playback to check, or check with your teacher.", "mode": null}, {"main": "Read the [Plagal Second Apolytikion](https://music.samonastery.org/Orthros/b3605_Apolytikion.pdf) in parallagi, then sing the melos.", "mode": null}, {"main": "Read the [Plagal Second Kathismata](https://music.samonastery.org/Orthros/b3610_Kathismata.pdf), first page only.", "mode": null}, {"main": "Find the Plagal Second Apolytikion (Ἀγγελικαὶ Δυνάμεις) in Greek on the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html) or in your own Anastasimatarion. Sing it from the score, not from memory.", "mode": null}, {"main": "Cold check: read the [Plagal Second Brief Lauds](https://music.samonastery.org/Orthros/b3690_Brief_Lauds.pdf). Log a 1–5 rating.", "mode": null}]}, {"title": "Plagal Second, sticheraric", "block": "Block 3 · The chromatic modes", "goal": "Read the slower sticheraric Plagal Second: Lord, I have cried, and the stichera.", "mode": "pl2", "file": "W18 Plagal Second, sticheraric", "days": [{"main": "[Plagal Second sticheraric formulae](https://music.samonastery.org/Formula6.pdf): sing 6.", "mode": null}, {"main": "Read [Plagal Second, Lord I have cried](https://music.samonastery.org/Vespers/b2600_Lord_I_have_cried.pdf) in parallagi.", "mode": null}, {"main": "Read the [Plagal Second stichera](https://music.samonastery.org/Vespers/b2620_Stichera.pdf), the first sticheron.", "mode": null}, {"main": "Read the [Plagal Second Dogmatikon](https://music.samonastery.org/Vespers/b2640_Dogmatikon.pdf), first half.", "mode": null}, {"main": "[Plagal Second verse formulae](https://music.samonastery.org/Formula6v.pdf): sing 4, then apply them to one psalm verse from Lord, I have cried.", "mode": null}, {"main": "Cold check: read the [Plagal Second Aposticha](https://music.samonastery.org/Vespers/b2650_Aposticha.pdf). Log a 1–5 rating.", "mode": null}]}, {"title": "Second Mode, heirmologic", "block": "Block 3 · The chromatic modes", "goal": "Read quick Second Mode melodies with base Di, including the hard-chromatic heirmologic coloring.", "mode": "2", "file": "W19 Second Mode, heirmologic", "days": [{"main": "[Second Mode heirmologic (hard) formulae](https://music.samonastery.org/Formula2h.pdf): sing 6.", "mode": null}, {"main": "Read [Second Mode, God is the Lord](https://music.samonastery.org/Orthros/b3200_God_Is_Lord.pdf).", "mode": null}, {"main": "Read the [Second Mode Apolytikion](https://music.samonastery.org/Orthros/b3205_Apolytikion.pdf) (Ὅτε κατῆλθες), parallagi then melos.", "mode": null}, {"main": "Read the [Second Mode Kathismata](https://music.samonastery.org/Orthros/b3210_Kathismata.pdf), first page.", "mode": null}, {"main": "Find Ὅτε κατῆλθες in Greek on the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html) or in your Anastasimatarion, and read it from the score.", "mode": null}, {"main": "Cold check: read the [Second Mode Brief Lauds](https://music.samonastery.org/Orthros/b3290_Brief_Lauds.pdf). Log a 1–5 rating.", "mode": null}]}, {"title": "Second Mode, sticheraric", "block": "Block 3 · The chromatic modes", "goal": "Read the soft chromatic Second Mode at sticheraric tempo.", "mode": "2", "file": "W20 Second Mode, sticheraric", "days": [{"main": "[Second Mode (soft) formulae](https://music.samonastery.org/Formula2s.pdf) and [Second Mode sticheraric formulae](https://music.samonastery.org/Formula2.pdf): sing 6.", "mode": null}, {"main": "Read [Second Mode, Lord I have cried](https://music.samonastery.org/Vespers/b2200_Lord_I_have_cried.pdf).", "mode": null}, {"main": "Read the [Second Mode stichera](https://music.samonastery.org/Vespers/b2220_Stichera.pdf), the first sticheron.", "mode": null}, {"main": "Read the [Second Mode Dogmatikon](https://music.samonastery.org/Vespers/b2240_Dogmatikon.pdf), first half.", "mode": null}, {"main": "[Second Mode verse formulae](https://music.samonastery.org/Formula2v.pdf): sing 4, then apply them to a psalm verse.", "mode": null}, {"main": "Cold check: read the [Second Mode Aposticha](https://music.samonastery.org/Vespers/b2250_Aposticha.pdf). Log a 1–5 rating.", "mode": null}]}, {"title": "Chromatic consolidation", "block": "Block 3 · The chromatic modes", "goal": "Switch between the two chromatic modes and back to diatonic without losing your intonation.", "mode": null, "file": "W21 Chromatic consolidation", "days": [{"main": "Ear quiz: 10 Hard chromatic, then 10 Soft chromatic, then 10 diatonic on Pa. Log your three scores.", "mode": null}, {"main": "Read the [Plagal Second Anavathmoi](https://music.samonastery.org/Orthros/b3620_Ascent.pdf), first antiphon.", "mode": null}, {"main": "Read the [Second Mode Anavathmoi](https://music.samonastery.org/Orthros/b3220_Ascent.pdf), first antiphon.", "mode": null}, {"main": "Read the [Plagal Second Lauds](https://music.samonastery.org/Orthros/b3680_Lauds.pdf), first sticheron.", "mode": null}, {"main": "Read the [Second Mode Lauds](https://music.samonastery.org/Orthros/b3280_Lauds.pdf), first sticheron.", "mode": null}, {"main": "Block 3 check. Find this week's Sunday Apolytikion on the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), whatever mode it's in, and sight-read it cold. Log a 1–5 rating.", "mode": null}]}, {"title": "First Mode: heirmologic", "block": "Block 4 · All eight modes, two tempos", "goal": "Read First Mode (Ἦχος Πρῶτος) at heirmologic tempo, using Orthros material, and sight-read the matching Greek Sunday hymns.", "mode": "1", "file": "W22 First Mode – heirmologic", "days": [{"main": "Review [[First Mode]], then sing 8 formulae from the [heirmologic formulae](https://music.samonastery.org/Formula1h.pdf) in parallagi.", "mode": null}, {"main": "Read [God is the Lord + Apolytikion](https://music.samonastery.org/Orthros/b3100_God_Is_Lord.pdf) and the [Apolytikion](https://music.samonastery.org/Orthros/b3105_Apolytikion.pdf): parallagi, then melos.", "mode": null}, {"main": "Read the [Kathismata](https://music.samonastery.org/Orthros/b3110_Kathismata.pdf): one kathisma.", "mode": null}, {"main": "Read the [More Honorable (Τὴν τιμιωτέραν)](https://music.samonastery.org/Orthros/b3140_More.pdf).", "mode": null}, {"main": "Formula hunt: mark every cadence in the [Brief Lauds](https://music.samonastery.org/Orthros/b3190_Brief_Lauds.pdf) and name its formula. Then sing it.", "mode": null}, {"main": "Cold Greek read. Open the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a heirmologic hymn in this mode (an Apolytikion, a Katavasia or a heirmos), and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "First Mode: sticheraric", "block": "Block 4 · All eight modes, two tempos", "goal": "Read First Mode at sticheraric tempo, using Vespers material.", "mode": "1", "file": "W23 First Mode – sticheraric", "days": [{"main": "Sing 8 formulae from [First Mode sticheraric formulae](https://music.samonastery.org/Formula1.pdf).", "mode": null}, {"main": "Read [Lord, I have cried](https://music.samonastery.org/Vespers/b2100_Lord_I_have_cried.pdf) in parallagi, then melos.", "mode": null}, {"main": "Read the [stichera](https://music.samonastery.org/Vespers/b2120_Stichera.pdf): one sticheron.", "mode": null}, {"main": "Read the [Dogmatikon](https://music.samonastery.org/Vespers/b2140_Dogmatikon.pdf), first half.", "mode": null}, {"main": "Read the [Aposticha](https://music.samonastery.org/Vespers/b2150_Aposticha.pdf). Mark the cadences first, then sing.", "mode": null}, {"main": "Cold Greek read. On the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a sticheron in this mode (Saturday Vespers or Lauds) and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Second Mode: heirmologic", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Second Mode (Ἦχος Δεύτερος) at heirmologic tempo, using Orthros material, and sight-read the matching Greek Sunday hymns.", "mode": "2", "file": "W24 Second Mode – heirmologic", "days": [{"main": "Review [[Second Mode]], then sing 8 formulae from the [heirmologic formulae](https://music.samonastery.org/Formula2h.pdf) in parallagi.", "mode": null}, {"main": "Read [God is the Lord + Apolytikion](https://music.samonastery.org/Orthros/b3200_God_Is_Lord.pdf) and the [Apolytikion](https://music.samonastery.org/Orthros/b3205_Apolytikion.pdf): parallagi, then melos.", "mode": null}, {"main": "Read the [Kathismata](https://music.samonastery.org/Orthros/b3210_Kathismata.pdf): one kathisma.", "mode": null}, {"main": "Read the [More Honorable (Τὴν τιμιωτέραν)](https://music.samonastery.org/Orthros/b3240_More.pdf).", "mode": null}, {"main": "Formula hunt: mark every cadence in the [Brief Lauds](https://music.samonastery.org/Orthros/b3290_Brief_Lauds.pdf) and name its formula. Then sing it.", "mode": null}, {"main": "Cold Greek read. Open the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a heirmologic hymn in this mode (an Apolytikion, a Katavasia or a heirmos), and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Second Mode: sticheraric", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Second Mode at sticheraric tempo, using Vespers material.", "mode": "2", "file": "W25 Second Mode – sticheraric", "days": [{"main": "Sing 8 formulae from [Second Mode sticheraric formulae](https://music.samonastery.org/Formula2.pdf).", "mode": null}, {"main": "Read [Lord, I have cried](https://music.samonastery.org/Vespers/b2200_Lord_I_have_cried.pdf) in parallagi, then melos.", "mode": null}, {"main": "Read the [stichera](https://music.samonastery.org/Vespers/b2220_Stichera.pdf): one sticheron.", "mode": null}, {"main": "Read the [Dogmatikon](https://music.samonastery.org/Vespers/b2240_Dogmatikon.pdf), first half.", "mode": null}, {"main": "Read the [Aposticha](https://music.samonastery.org/Vespers/b2250_Aposticha.pdf). Mark the cadences first, then sing.", "mode": null}, {"main": "Cold Greek read. On the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a sticheron in this mode (Saturday Vespers or Lauds) and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Third Mode: heirmologic", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Third Mode (Ἦχος Τρίτος) at heirmologic tempo, using Orthros material, and sight-read the matching Greek Sunday hymns.", "mode": "3", "file": "W26 Third Mode – heirmologic", "days": [{"main": "Review [[Third Mode]], then sing 8 formulae from the [heirmologic formulae](https://music.samonastery.org/Formula3h.pdf) in parallagi.", "mode": null}, {"main": "Read [God is the Lord + Apolytikion](https://music.samonastery.org/Orthros/b3300_God_Is_Lord.pdf) and the [Apolytikion](https://music.samonastery.org/Orthros/b3305_Apolytikion.pdf): parallagi, then melos.", "mode": null}, {"main": "Read the [Kathismata](https://music.samonastery.org/Orthros/b3310_Kathismata.pdf): one kathisma.", "mode": null}, {"main": "Read the [More Honorable (Τὴν τιμιωτέραν)](https://music.samonastery.org/Orthros/b3340_More.pdf).", "mode": null}, {"main": "Formula hunt: mark every cadence in the [Brief Lauds](https://music.samonastery.org/Orthros/b3390_Brief_Lauds.pdf) and name its formula. Then sing it.", "mode": null}, {"main": "Cold Greek read. Open the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a heirmologic hymn in this mode (an Apolytikion, a Katavasia or a heirmos), and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Third Mode: sticheraric", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Third Mode at sticheraric tempo, using Vespers material.", "mode": "3", "file": "W27 Third Mode – sticheraric", "days": [{"main": "Sing 8 formulae from [Third Mode sticheraric formulae](https://music.samonastery.org/Formula3.pdf).", "mode": null}, {"main": "Read [Lord, I have cried](https://music.samonastery.org/Vespers/b2300_Lord_I_have_cried.pdf) in parallagi, then melos.", "mode": null}, {"main": "Read the [stichera](https://music.samonastery.org/Vespers/b2320_Stichera.pdf): one sticheron.", "mode": null}, {"main": "Read the [Dogmatikon](https://music.samonastery.org/Vespers/b2340_Dogmatikon.pdf), first half.", "mode": null}, {"main": "Read the [Aposticha](https://music.samonastery.org/Vespers/b2350_Aposticha.pdf). Mark the cadences first, then sing.", "mode": null}, {"main": "Cold Greek read. On the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a sticheron in this mode (Saturday Vespers or Lauds) and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Fourth Mode: heirmologic", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Fourth Mode (Ἦχος Τέταρτος) at heirmologic tempo, using Orthros material, and sight-read the matching Greek Sunday hymns.", "mode": "4", "file": "W28 Fourth Mode – heirmologic", "days": [{"main": "Review [[Fourth Mode]], then sing 8 formulae from the [heirmologic formulae](https://music.samonastery.org/Formula4h.pdf) in parallagi.", "mode": null}, {"main": "Read [God is the Lord + Apolytikion](https://music.samonastery.org/Orthros/b3400_God_Is_Lord.pdf) and the [Apolytikion](https://music.samonastery.org/Orthros/b3405_Apolytikion.pdf): parallagi, then melos.", "mode": null}, {"main": "Read the [Kathismata](https://music.samonastery.org/Orthros/b3410_Kathismata.pdf): one kathisma.", "mode": null}, {"main": "Read the [More Honorable (Τὴν τιμιωτέραν)](https://music.samonastery.org/Orthros/b3440_More.pdf).", "mode": null}, {"main": "Formula hunt: mark every cadence in the [Brief Lauds](https://music.samonastery.org/Orthros/b3490_Brief_Lauds.pdf) and name its formula. Then sing it.", "mode": null}, {"main": "Cold Greek read. Open the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a heirmologic hymn in this mode (an Apolytikion, a Katavasia or a heirmos), and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Fourth Mode: sticheraric", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Fourth Mode at sticheraric tempo, using Vespers material.", "mode": "4", "file": "W29 Fourth Mode – sticheraric", "days": [{"main": "Sing 8 formulae from [Fourth Mode sticheraric formulae](https://music.samonastery.org/Formula4.pdf).", "mode": null}, {"main": "Read [Lord, I have cried](https://music.samonastery.org/Vespers/b2400_Lord_I_have_cried.pdf) in parallagi, then melos.", "mode": null}, {"main": "Read the [stichera](https://music.samonastery.org/Vespers/b2420_Stichera.pdf): one sticheron.", "mode": null}, {"main": "Read the [Dogmatikon](https://music.samonastery.org/Vespers/b2440_Dogmatikon.pdf), first half.", "mode": null}, {"main": "Read the [Aposticha](https://music.samonastery.org/Vespers/b2450_Aposticha.pdf). Mark the cadences first, then sing.", "mode": null}, {"main": "Cold Greek read. On the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a sticheron in this mode (Saturday Vespers or Lauds) and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Plagal First Mode: heirmologic", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Plagal First Mode (Ἦχος Πλάγιος τοῦ Πρώτου) at heirmologic tempo, using Orthros material, and sight-read the matching Greek Sunday hymns.", "mode": "pl1", "file": "W30 Plagal First Mode – heirmologic", "days": [{"main": "Review [[Plagal First Mode]], then sing 8 formulae from the [heirmologic formulae](https://music.samonastery.org/Formula5h.pdf) in parallagi.", "mode": null}, {"main": "Read [God is the Lord + Apolytikion](https://music.samonastery.org/Orthros/b3500_God_Is_Lord.pdf) and the [Apolytikion](https://music.samonastery.org/Orthros/b3505_Apolytikion.pdf): parallagi, then melos.", "mode": null}, {"main": "Read the [Kathismata](https://music.samonastery.org/Orthros/b3510_Kathismata.pdf): one kathisma.", "mode": null}, {"main": "Read the [More Honorable (Τὴν τιμιωτέραν)](https://music.samonastery.org/Orthros/b3540_More.pdf).", "mode": null}, {"main": "Formula hunt: mark every cadence in the [Brief Lauds](https://music.samonastery.org/Orthros/b3590_Brief_Lauds.pdf) and name its formula. Then sing it.", "mode": null}, {"main": "Cold Greek read. Open the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a heirmologic hymn in this mode (an Apolytikion, a Katavasia or a heirmos), and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Plagal First Mode: sticheraric", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Plagal First Mode at sticheraric tempo, using Vespers material.", "mode": "pl1", "file": "W31 Plagal First Mode – sticheraric", "days": [{"main": "Sing 8 formulae from [Plagal First Mode sticheraric formulae](https://music.samonastery.org/Formula5.pdf).", "mode": null}, {"main": "Read [Lord, I have cried](https://music.samonastery.org/Vespers/b2500_Lord_I_have_cried.pdf) in parallagi, then melos.", "mode": null}, {"main": "Read the [stichera](https://music.samonastery.org/Vespers/b2520_Stichera.pdf): one sticheron.", "mode": null}, {"main": "Read the [Dogmatikon](https://music.samonastery.org/Vespers/b2540_Dogmatikon.pdf), first half.", "mode": null}, {"main": "Read the [Aposticha](https://music.samonastery.org/Vespers/b2550_Aposticha.pdf). Mark the cadences first, then sing.", "mode": null}, {"main": "Cold Greek read. On the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a sticheron in this mode (Saturday Vespers or Lauds) and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Plagal Second Mode: heirmologic", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Plagal Second Mode (Ἦχος Πλάγιος τοῦ Δευτέρου) at heirmologic tempo, using Orthros material, and sight-read the matching Greek Sunday hymns.", "mode": "pl2", "file": "W32 Plagal Second Mode – heirmologic", "days": [{"main": "Review [[Plagal Second Mode]], then sing 8 formulae from the [heirmologic formulae](https://music.samonastery.org/Formula6h.pdf) in parallagi.", "mode": null}, {"main": "Read [God is the Lord + Apolytikion](https://music.samonastery.org/Orthros/b3600_God_Is_Lord.pdf) and the [Apolytikion](https://music.samonastery.org/Orthros/b3605_Apolytikion.pdf): parallagi, then melos.", "mode": null}, {"main": "Read the [Kathismata](https://music.samonastery.org/Orthros/b3610_Kathismata.pdf): one kathisma.", "mode": null}, {"main": "Read the [More Honorable (Τὴν τιμιωτέραν)](https://music.samonastery.org/Orthros/b3640_More.pdf).", "mode": null}, {"main": "Formula hunt: mark every cadence in the [Brief Lauds](https://music.samonastery.org/Orthros/b3690_Brief_Lauds.pdf) and name its formula. Then sing it.", "mode": null}, {"main": "Cold Greek read. Open the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a heirmologic hymn in this mode (an Apolytikion, a Katavasia or a heirmos), and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Plagal Second Mode: sticheraric", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Plagal Second Mode at sticheraric tempo, using Vespers material.", "mode": "pl2", "file": "W33 Plagal Second Mode – sticheraric", "days": [{"main": "Sing 8 formulae from [Plagal Second Mode sticheraric formulae](https://music.samonastery.org/Formula6.pdf).", "mode": null}, {"main": "Read [Lord, I have cried](https://music.samonastery.org/Vespers/b2600_Lord_I_have_cried.pdf) in parallagi, then melos.", "mode": null}, {"main": "Read the [stichera](https://music.samonastery.org/Vespers/b2620_Stichera.pdf): one sticheron.", "mode": null}, {"main": "Read the [Dogmatikon](https://music.samonastery.org/Vespers/b2640_Dogmatikon.pdf), first half.", "mode": null}, {"main": "Read the [Aposticha](https://music.samonastery.org/Vespers/b2650_Aposticha.pdf). Mark the cadences first, then sing.", "mode": null}, {"main": "Cold Greek read. On the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a sticheron in this mode (Saturday Vespers or Lauds) and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Grave Mode: heirmologic", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Grave Mode (Ἦχος Βαρύς) at heirmologic tempo, using Orthros material, and sight-read the matching Greek Sunday hymns.", "mode": "gr", "file": "W34 Grave Mode – heirmologic", "days": [{"main": "Review [[Grave Mode]], then sing 8 formulae from the [heirmologic formulae](https://music.samonastery.org/Formula7h.pdf) in parallagi.", "mode": null}, {"main": "Read [God is the Lord + Apolytikion](https://music.samonastery.org/Orthros/b3700_God_Is_Lord.pdf) and the [Apolytikion](https://music.samonastery.org/Orthros/b3705_Apolytikion.pdf): parallagi, then melos.", "mode": null}, {"main": "Read the [Kathismata](https://music.samonastery.org/Orthros/b3710_Kathismata.pdf): one kathisma.", "mode": null}, {"main": "Read the [More Honorable (Τὴν τιμιωτέραν)](https://music.samonastery.org/Orthros/b3740_More.pdf).", "mode": null}, {"main": "Formula hunt: mark every cadence in the [Brief Lauds](https://music.samonastery.org/Orthros/b3790_Brief_Lauds.pdf) and name its formula. Then sing it.", "mode": null}, {"main": "Cold Greek read. Open the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a heirmologic hymn in this mode (an Apolytikion, a Katavasia or a heirmos), and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Grave Mode: sticheraric", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Grave Mode at sticheraric tempo, using Vespers material.", "mode": "gr", "file": "W35 Grave Mode – sticheraric", "days": [{"main": "Sing 8 formulae from [Grave Mode sticheraric formulae](https://music.samonastery.org/Formula7.pdf).", "mode": null}, {"main": "Read [Lord, I have cried](https://music.samonastery.org/Vespers/b2700_Lord_I_have_cried.pdf) in parallagi, then melos.", "mode": null}, {"main": "Read the [stichera](https://music.samonastery.org/Vespers/b2720_Stichera.pdf): one sticheron.", "mode": null}, {"main": "Read the [Dogmatikon](https://music.samonastery.org/Vespers/b2740_Dogmatikon.pdf), first half.", "mode": null}, {"main": "Read the [Aposticha](https://music.samonastery.org/Vespers/b2750_Aposticha.pdf). Mark the cadences first, then sing.", "mode": null}, {"main": "Cold Greek read. On the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a sticheron in this mode (Saturday Vespers or Lauds) and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Plagal Fourth Mode: heirmologic", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Plagal Fourth Mode (Ἦχος Πλάγιος τοῦ Τετάρτου) at heirmologic tempo, using Orthros material, and sight-read the matching Greek Sunday hymns.", "mode": "pl4", "file": "W36 Plagal Fourth Mode – heirmologic", "days": [{"main": "Review [[Plagal Fourth Mode]], then sing 8 formulae from the [heirmologic formulae](https://music.samonastery.org/Formula8h.pdf) in parallagi.", "mode": null}, {"main": "Read [God is the Lord + Apolytikion](https://music.samonastery.org/Orthros/b3800_God_Is_Lord.pdf) and the [Apolytikion](https://music.samonastery.org/Orthros/b3805_Apolytikion.pdf): parallagi, then melos.", "mode": null}, {"main": "Read the [Kathismata](https://music.samonastery.org/Orthros/b3810_Kathismata.pdf): one kathisma.", "mode": null}, {"main": "Read the [More Honorable (Τὴν τιμιωτέραν)](https://music.samonastery.org/Orthros/b3840_More.pdf).", "mode": null}, {"main": "Formula hunt: mark every cadence in the [Brief Lauds](https://music.samonastery.org/Orthros/b3890_Brief_Lauds.pdf) and name its formula. Then sing it.", "mode": null}, {"main": "Cold Greek read. Open the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a heirmologic hymn in this mode (an Apolytikion, a Katavasia or a heirmos), and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Plagal Fourth Mode: sticheraric", "block": "Block 4 · All eight modes, two tempos", "goal": "Read Plagal Fourth Mode at sticheraric tempo, using Vespers material.", "mode": "pl4", "file": "W37 Plagal Fourth Mode – sticheraric", "days": [{"main": "Sing 8 formulae from the [sticheraric formulae page](https://stanthonysmonastery.org/pages/byzantine-music-formulae) (Plagal Fourth list).", "mode": null}, {"main": "Read [Lord, I have cried](https://music.samonastery.org/Vespers/b2800_Lord_I_have_cried.pdf) in parallagi, then melos.", "mode": null}, {"main": "Read the [stichera](https://music.samonastery.org/Vespers/b2820_Stichera.pdf): one sticheron.", "mode": null}, {"main": "Read the [Dogmatikon](https://music.samonastery.org/Vespers/b2840_Dogmatikon.pdf), first half.", "mode": null}, {"main": "Read the [Aposticha](https://music.samonastery.org/Vespers/b2850_Aposticha.pdf). Mark the cadences first, then sing.", "mode": null}, {"main": "Cold Greek read. On the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), find a sticheron in this mode (Saturday Vespers or Lauds) and sight-read it. Log a 1–5 rating.", "mode": null}]}, {"title": "Phthorae in practice", "block": "Block 5 · Modulation and alteration", "goal": "Track the scale through every phthora without losing your place.", "mode": null, "file": "W38 Phthorae in practice", "days": [{"main": "Reread [[Phthorae and Chroai]]. Make a card in My Work for each phthora you meet this week.", "mode": null}, {"main": "Read the [Third Mode Doxastikon (Glory)](https://music.samonastery.org/Vespers/b2330_Glory.pdf) and circle each phthora before you sing.", "mode": null}, {"main": "Read the [Grave Doxastikon](https://music.samonastery.org/Vespers/b2730_Glory.pdf), circling phthorae first.", "mode": null}, {"main": "Read the [First Mode Doxastikon](https://music.samonastery.org/Vespers/b2130_Glory.pdf), circling phthorae first.", "mode": null}, {"main": "Drone drill. Sing Di–Ke–Zo–Ni' diatonic, then the same notes soft chromatic, then back. Ten times.", "mode": null}, {"main": "Cold check: pick any Doxastikon on the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html), and before singing, list the phthorae and what each one does. Log a 1–5 rating.", "mode": null}]}, {"title": "Chroai and attractions", "block": "Block 5 · Modulation and alteration", "goal": "Hear the zygos, kliton and spathi colorings, and the attractions (ἕλξεις) on Zo, Vou and Ke.", "mode": null, "file": "W39 Chroai and attractions", "days": [{"main": "Read the chroai section of [[Phthorae and Chroai]]. Find one example of each chroa in your own books (the Anastasimatarion or Doxastarion).", "mode": null}, {"main": "Attractions. In Plagal Fourth and First Mode melodies, mark every Zo that falls toward Ke, and every Vou pulled toward Pa. Sing them with the drone and tuner on.", "mode": null}, {"main": "Read the [Plagal Fourth Doxastikon](https://music.samonastery.org/Vespers/b2830_Glory.pdf) and mark the accidentals.", "mode": null}, {"main": "Read the [Fourth Mode Doxastikon](https://music.samonastery.org/Vespers/b2430_Glory.pdf) and mark the accidentals.", "mode": null}, {"main": "Read the [Plagal First Doxastikon](https://music.samonastery.org/Vespers/b2530_Glory.pdf) and mark the accidentals.", "mode": null}, {"main": "Cold check: any Doxastikon of the coming Sunday. Log a 1–5 rating.", "mode": null}]}, {"title": "Special cases: Protovarys, tetraphonic, Nenano", "block": "Block 5 · Modulation and alteration", "goal": "Read the less common mode variants that show up in real scores.", "mode": null, "file": "W40 Special cases – Protovarys, tetraphonic, Nenano", "days": [{"main": "[Protovarys heirmologic formulae](https://music.samonastery.org/Formula7r.pdf): sing 6.", "mode": null}, {"main": "[Protovarys sticheraric formulae](https://music.samonastery.org/Formula7p.pdf): sing 6.", "mode": null}, {"main": "[Tetraphonic Plagal Second formulae](https://music.samonastery.org/Formula6t.pdf): sing 6.", "mode": null}, {"main": "[Plagal Fourth apolytikia formulae](https://music.samonastery.org/Formula8t.pdf) and [Plagal Fourth canon formulae](https://music.samonastery.org/Formula8c.pdf): sing 4 from each.", "mode": null}, {"main": "Nenano. Read the Nenano phthora in [[Phthorae and Chroai]] and find one in your own books.", "mode": null}, {"main": "Cold check: a Plagal Second Doxastikon (look for Nenano). Log a 1–5 rating.", "mode": null}]}, {"title": "Mixed-mode pieces", "block": "Block 5 · Modulation and alteration", "goal": "Read pieces that change mode partway through.", "mode": null, "file": "W41 Mixed-mode pieces", "days": [{"main": "Read the [Plagal Second Doxastikon](https://music.samonastery.org/Vespers/b2630_Glory.pdf), first half.", "mode": null}, {"main": "Read the [Plagal Second Doxastikon](https://music.samonastery.org/Vespers/b2630_Glory.pdf), second half.", "mode": null}, {"main": "Read the [Second Mode Doxastikon](https://music.samonastery.org/Vespers/b2230_Glory.pdf).", "mode": null}, {"main": "Read the [Grave Aposticha Doxastikon](https://music.samonastery.org/Vespers/b2755_ApostichaDoxa.pdf).", "mode": null}, {"main": "Read the [Plagal Fourth Aposticha Doxastikon](https://music.samonastery.org/Vespers/b2855_ApostichaDoxa.pdf).", "mode": null}, {"main": "Cold check: the coming Sunday's Doxastikon. Log a 1–5 rating.", "mode": null}]}, {"title": "Eothina, part 1", "block": "Block 5 · Modulation and alteration", "goal": "The Eothina doxastika are long sticheraric pieces, one per mode. They're a perfect bridge to the capstone.", "mode": null, "file": "W42 Eothina, part 1", "days": [{"main": "[Eothinon 1](https://music.samonastery.org/Orthros/b3921_Eothinon1.pdf) (First Mode), first half.", "mode": null}, {"main": "Eothinon 1, second half.", "mode": null}, {"main": "[Eothinon 2](https://music.samonastery.org/Orthros/b3922_Eothinon2.pdf) (Second Mode), first half.", "mode": null}, {"main": "Eothinon 2, second half.", "mode": null}, {"main": "[Eothinon 3](https://music.samonastery.org/Orthros/b3923_Eothinon3.pdf) (Third Mode).", "mode": null}, {"main": "Self-check: sing Eothinon 1 straight through, record it, and log a 1–5 rating.", "mode": null}]}, {"title": "Papadic reading I", "block": "Block 6 · Papadic tempo", "goal": "Read slow, melismatic papadic melody: long phrases and the formulae inside them.", "mode": null, "file": "W43 Papadic reading I", "days": [{"main": "Read St Anthony's [papadic formulae page](https://stanthonysmonastery.org/pages/papadic-formulae) intro. Then [First Mode papadic formulae](https://music.samonastery.org/Formula1p.pdf): sing 4.", "mode": null}, {"main": "[Fourth Mode Agia papadic formulae](https://music.samonastery.org/Formula4p.pdf): sing 4. Agia sits on Di.", "mode": null}, {"main": "[Plagal Fourth papadic formulae](https://music.samonastery.org/Formula8p.pdf): sing 4.", "mode": null}, {"main": "Open the [Divine Liturgy in Byzantine notation](https://stanthonysmonastery.org/pages/divine-liturgy-byzantine-notation-modern) and pick a Cherubic Hymn. Read the first line only.", "mode": null}, {"main": "Same Cherubic Hymn, next two lines.", "mode": null}, {"main": "Self-check: sing the opening of the Cherubic Hymn, record it, and log a 1–5 rating.", "mode": null}]}, {"title": "Papadic reading II", "block": "Block 6 · Papadic tempo", "goal": "Communion hymns (koinonika), and the papadic formulae of the remaining modes.", "mode": null, "file": "W44 Papadic reading II", "days": [{"main": "[Second Mode papadic](https://music.samonastery.org/Formula2p.pdf) and [Second Mode hard-chromatic papadic](https://music.samonastery.org/Formula2ph.pdf): sing 3 from each.", "mode": null}, {"main": "[Third Mode papadic](https://music.samonastery.org/Formula3p.pdf) and [Grave papadic](https://music.samonastery.org/Formula7pp.pdf): sing 3 from each.", "mode": null}, {"main": "[Plagal First papadic](https://music.samonastery.org/Formula5p.pdf) and [Plagal Second papadic](https://music.samonastery.org/Formula6p.pdf): sing 3 from each.", "mode": null}, {"main": "From the [Divine Liturgy scores](https://stanthonysmonastery.org/pages/divine-liturgy-byzantine-notation-modern), read a Sunday koinonikon (Αἰνεῖτε): first page.", "mode": null}, {"main": "Same koinonikon, next page.", "mode": null}, {"main": "Self-check: finish the Cherubic Hymn you started last week. Log a 1–5 rating.", "mode": null}]}, {"title": "Eothina, part 2", "block": "Block 6 · Papadic tempo", "goal": "Long-form reading in the plagal modes.", "mode": null, "file": "W45 Eothina, part 2", "days": [{"main": "[Eothinon 4](https://music.samonastery.org/Orthros/b3924_Eothinon4.pdf) (Fourth Mode).", "mode": null}, {"main": "[Eothinon 5](https://music.samonastery.org/Orthros/b3925_Eothinon5.pdf) (Plagal First).", "mode": null}, {"main": "[Eothinon 6](https://music.samonastery.org/Orthros/b3926_Eothinon6.pdf) (Plagal Second), first half.", "mode": null}, {"main": "Eothinon 6, second half.", "mode": null}, {"main": "[Eothinon 7](https://music.samonastery.org/Orthros/b3927_Eothinon7.pdf) (Grave).", "mode": null}, {"main": "Self-check: sing Eothinon 5 straight through, record it, and log a 1–5 rating.", "mode": null}]}, {"title": "Cold reading: First Mode, Second Mode, Third Mode, Fourth Mode", "block": "Block 7 · Capstone: read any score", "goal": "Sight-read unseen Greek scores at performance pace, with no audio until afterward.", "mode": null, "file": "W46 Cold reading – First Mode, Second Mode, Third Mode, Fourth Mode", "days": [{"main": "Unseen First Mode piece from the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html): one heirmologic or sticheraric hymn you have never sung. Do one pass with no audio and record it, then check against the DCS recording or your teacher.", "mode": "1"}, {"main": "Unseen Second Mode piece from the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html): one heirmologic or sticheraric hymn you have never sung. Do one pass with no audio and record it, then check against the DCS recording or your teacher.", "mode": "2"}, {"main": "Unseen Third Mode piece from the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html): one heirmologic or sticheraric hymn you have never sung. Do one pass with no audio and record it, then check against the DCS recording or your teacher.", "mode": "3"}, {"main": "Unseen Fourth Mode piece from the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html): one heirmologic or sticheraric hymn you have never sung. Do one pass with no audio and record it, then check against the DCS recording or your teacher.", "mode": "4"}, {"main": "Redo the worst of this week's four. Mark the cadences and name the formulae first, then sing it again.", "mode": null}, {"main": "Write three sentences in the log: what made you stop, what you misread, and what you'd drill. Rate yourself 1–5.", "mode": null}]}, {"title": "Cold reading: Plagal First Mode, Plagal Second Mode, Grave Mode, Plagal Fourth Mode", "block": "Block 7 · Capstone: read any score", "goal": "Sight-read unseen Greek scores at performance pace, with no audio until afterward.", "mode": null, "file": "W47 Cold reading – Plagal First Mode, Plagal Second Mode, Grave Mode, Plagal Fourth Mode", "days": [{"main": "Unseen Plagal First Mode piece from the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html): one heirmologic or sticheraric hymn you have never sung. Do one pass with no audio and record it, then check against the DCS recording or your teacher.", "mode": "pl1"}, {"main": "Unseen Plagal Second Mode piece from the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html): one heirmologic or sticheraric hymn you have never sung. Do one pass with no audio and record it, then check against the DCS recording or your teacher.", "mode": "pl2"}, {"main": "Unseen Grave Mode piece from the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html): one heirmologic or sticheraric hymn you have never sung. Do one pass with no audio and record it, then check against the DCS recording or your teacher.", "mode": "gr"}, {"main": "Unseen Plagal Fourth Mode piece from the [Digital Chant Stand](https://dcs.goarch.org/goa/dcs/dcs.html): one heirmologic or sticheraric hymn you have never sung. Do one pass with no audio and record it, then check against the DCS recording or your teacher.", "mode": "pl4"}, {"main": "Redo the worst of this week's four. Mark the cadences and name the formulae first, then sing it again.", "mode": null}, {"main": "Write three sentences in the log: what made you stop, what you misread, and what you'd drill. Rate yourself 1–5.", "mode": null}]}, {"title": "Final check: one score per mode", "block": "Block 7 · Capstone: read any score", "goal": "Sight-read one unseen score in each of the eight modes. This is the year-one finish line.", "mode": null, "file": "W48 Final check – one score per mode", "days": [{"main": "Unseen First Mode and Second Mode pieces.", "mode": "1"}, {"main": "Unseen Third Mode and Fourth Mode pieces.", "mode": "3"}, {"main": "Unseen Plagal First and Plagal Second pieces.", "mode": "pl1"}, {"main": "Unseen Grave and Plagal Fourth pieces.", "mode": "gr"}, {"main": "Redo the two weakest pieces from this week.", "mode": null}, {"main": "Year-end review. Read your practice log from the beginning, note your ratings by block in [[Year Review]], and plan year two.", "mode": null}]}], "cards": [{"id": "c000", "week": 1, "front": "Ison", "back": "Repeat the previous pitch (or, at the start of a piece, sing the base note).", "glyph": "𝁆"}, {"id": "c001", "week": 1, "front": "Oligon", "back": "Up one step.", "glyph": "𝁇"}, {"id": "c002", "week": 1, "front": "Apostrophos", "back": "Down one step.", "glyph": "𝁑"}, {"id": "c003", "week": 1, "front": "Petasti", "back": "Up one step, with its own livelier, flicked delivery.", "glyph": "𝁉"}, {"id": "c004", "week": 1, "front": "Kentimata", "back": "Up one step, sung lightly. Usually paired with an oligon.", "glyph": "𝁎"}, {"id": "c005", "week": 1, "front": "Yfen (tie)", "back": "Joins two characters of the same pitch into one sustained note. Their durations add.", "glyph": ""}, {"id": "c006", "week": 1, "front": "The natural scale of Ni, ascending", "back": "Ni – Pa – Vou – Ga – Di – Ke – Zo – Ni'", "glyph": ""}, {"id": "c007", "week": 1, "front": "Diatonic steps from Ni, in moria (1881 Committee)", "back": "12 – 10 – 8 – 12 – 12 – 10 – 8 (72 per octave)", "glyph": ""}, {"id": "c008", "week": 1, "front": "Parallagi vs. metrophonia", "back": "Parallagi: singing the note names (Ni, Pa, Vou…) in rhythm. Metrophonia: the note-by-note outline read from the neumes, before the text and full melos are added.", "glyph": ""}, {"id": "c009", "week": 2, "front": "Klasma", "back": "Adds one beat to the note.", "glyph": "𝁿"}, {"id": "c010", "week": 2, "front": "Apli", "back": "Adds one beat to the note (written below).", "glyph": "𝂅"}, {"id": "c011", "week": 2, "front": "Dipli", "back": "Adds two beats.", "glyph": "𝂆"}, {"id": "c012", "week": 2, "front": "Tripli", "back": "Adds three beats.", "glyph": "𝂇"}, {"id": "c013", "week": 2, "front": "Rests", "back": "A rest takes the place of a note for one or more beats. See [[Ex 028]]–[[Ex 030]].", "glyph": ""}, {"id": "c014", "week": 3, "front": "Yporroi", "back": "Two quick descending steps, sung as a connected pair.", "glyph": "𝁓"}, {"id": "c015", "week": 3, "front": "Kentima", "back": "Two steps up. Always written with an oligon or petasti.", "glyph": "𝁏"}, {"id": "c016", "week": 3, "front": "Elafron", "back": "Two steps down.", "glyph": "𝁕"}, {"id": "c017", "week": 3, "front": "Leap of a fourth up", "back": "Combine an oligon or petasti with a kentima (see [[Ex 045]]).", "glyph": ""}, {"id": "c018", "week": 3, "front": "Leap of a fourth down", "back": "Combine an elafron and an apostrophos (see [[Ex 045]]).", "glyph": ""}, {"id": "c019", "week": 4, "front": "Ypsili", "back": "Four steps up. Always written with an oligon or petasti.", "glyph": "𝁐"}, {"id": "c020", "week": 4, "front": "Chamili", "back": "Four steps down.", "glyph": "𝁖"}, {"id": "c021", "week": 4, "front": "How a fifth up is written", "back": "Oligon (or petasti) with an ypsili at its right end.", "glyph": ""}, {"id": "c022", "week": 4, "front": "Elliptic (incomplete) measure", "back": "A measure with fewer beats than the meter, usually at the start or end of a phrase. See [[Ex 059]].", "glyph": ""}, {"id": "c023", "week": 5, "front": "Gorgon", "back": "Speeds things up: the marked note and the one before it share one beat between them.", "glyph": "𝂏"}, {"id": "c024", "week": 5, "front": "Continuous elafron", "back": "Elafron in running motion, part of a quick descent. See [[Ex 078]].", "glyph": ""}, {"id": "c025", "week": 6, "front": "Digorgon", "back": "Three notes share one beat.", "glyph": "𝂒"}, {"id": "c026", "week": 6, "front": "Trigorgon", "back": "Four notes share one beat.", "glyph": "𝂖"}, {"id": "c027", "week": 6, "front": "Argon", "back": "Divides and lengthens at once: the note before is shortened and the marked note held longer. Listen to [[Ex 087]].", "glyph": "𝂗"}, {"id": "c028", "week": 6, "front": "Diargon", "back": "Like the argon, but holds the marked note longer still. See [[Ex 091]].", "glyph": "𝂙"}, {"id": "c029", "week": 6, "front": "Vareia", "back": "Stresses the note that follows it.", "glyph": "𝁘"}, {"id": "c030", "week": 6, "front": "Psifiston", "back": "A strong, sharply accented attack on the note.", "glyph": "𝁚"}, {"id": "c031", "week": 7, "front": "Omalon", "back": "A smooth, gentle undulation on the note.", "glyph": "𝁛"}, {"id": "c032", "week": 7, "front": "Antikenoma", "back": "A light, connected delivery that leans into the next note. Drilled on both weak and strong beats in [[Ex 099]]–[[Ex 101]].", "glyph": "𝁜"}, {"id": "c033", "week": 7, "front": "Syndesmos / eteron", "back": "Binds two notes into one smooth gesture.", "glyph": "𝁠"}, {"id": "c034", "week": 7, "front": "Diesis", "back": "Raises the note by a few moria (an accidental sharp).", "glyph": "𝃏"}, {"id": "c035", "week": 7, "front": "Yfesis", "back": "Lowers the note by a few moria (an accidental flat).", "glyph": ""}, {"id": "c036", "week": 8, "front": "Martyria", "back": "A 'witness' sign: a note letter plus a genus mark that confirms which pitch and scale you're on.", "glyph": "𝂢"}, {"id": "c037", "week": 9, "front": "Plagal Fourth: base and genus", "back": "Base Ni, diatonic. Intonation: Νεάγιε.", "glyph": ""}, {"id": "c038", "week": 10, "front": "First Mode: base and genus", "back": "Base Pa, diatonic. Intonation: Ἀνανές.", "glyph": ""}, {"id": "c039", "week": 11, "front": "Fourth Mode Legetos: base", "back": "Vou, diatonic. Agia (papadic) sits on Di.", "glyph": ""}, {"id": "c040", "week": 12, "front": "Plagal First: base", "back": "Pa, diatonic (some melodies use low Ke). Intonation: Ἀνεανές.", "glyph": ""}, {"id": "c041", "week": 13, "front": "Third Mode: base and genus", "back": "Base Ga, enharmonic (the Nana tetrachord). Intonation: Νανά.", "glyph": ""}, {"id": "c042", "week": 13, "front": "Enharmonic tetrachord from Ga (this vault's model)", "back": "Ga–Di 12, Di–Ke 12, Ke–Zo 6 (Zo is lowered). This is an approximation, so check it against your teacher's.", "glyph": ""}, {"id": "c043", "week": 14, "front": "Grave: base", "back": "Ga (enharmonic) in the workbook. Some melodies use diatonic low Zo. Intonation: Ἀανές.", "glyph": ""}, {"id": "c044", "week": 15, "front": "Thesis / formula", "back": "A stock melodic phrase or cadence for a given mode and genre. Fluent readers recognize these as whole units.", "glyph": ""}, {"id": "c045", "week": 16, "front": "Hard chromatic tetrachord from Pa", "back": "Pa–Vou 6, Vou–Ga 20, Ga–Di 4", "glyph": "𝃅"}, {"id": "c046", "week": 16, "front": "Soft chromatic tetrachord from Di", "back": "Di–Ke 8, Ke–Zo 14, Zo–Ni' 8", "glyph": "𝃃"}, {"id": "c047", "week": 17, "front": "Plagal Second: base and genus", "back": "Base Pa, hard chromatic. Intonation: Νεχεανές.", "glyph": ""}, {"id": "c048", "week": 19, "front": "Second Mode: base", "back": "Di. Soft chromatic at sticheraric and papadic tempo; heirmologic melodies often take a hard-chromatic coloring.", "glyph": ""}, {"id": "c049", "week": 22, "front": "Heirmologic vs. sticheraric", "back": "Heirmologic: quick, roughly one note per syllable (heirmoi, apolytikia). Sticheraric: slower, with more melisma (stichera, doxastika).", "glyph": ""}, {"id": "c050", "week": 38, "front": "Phthora", "back": "A sign that changes the scale or genus from that point on, fixing the identity of a note.", "glyph": "𝃂"}, {"id": "c051", "week": 39, "front": "Chroa", "back": "A coloring of the scale (zygos, kliton, spathi) that alters certain steps without fully changing mode.", "glyph": "𝃈"}, {"id": "c052", "week": 39, "front": "Attraction (ἕλξις)", "back": "A note pulled slightly toward a nearby strong degree, e.g. Zo lowered as it falls to Ke.", "glyph": ""}, {"id": "c053", "week": 40, "front": "Nenano", "back": "A chromatic phthora that gives Plagal Second / tetraphonic coloring, typically around Ga or Di.", "glyph": "𝃇"}, {"id": "c054", "week": 43, "front": "Papadic tempo", "back": "The slowest, most melismatic style: Cherubic hymns, koinonika, and kalophonic pieces.", "glyph": ""}], "modes": {"1": {"name": "First Mode", "greek": "Ἦχος Πρῶτος", "base": "Pa", "genus": "diatonic"}, "2": {"name": "Second Mode", "greek": "Ἦχος Δεύτερος", "base": "Di", "genus": "soft chromatic"}, "3": {"name": "Third Mode", "greek": "Ἦχος Τρίτος", "base": "Ga", "genus": "enharmonic"}, "4": {"name": "Fourth Mode", "greek": "Ἦχος Τέταρτος", "base": "Vou (Legetos) / Di (Agia) / Pa", "genus": "diatonic"}, "pl1": {"name": "Plagal First Mode", "greek": "Ἦχος Πλάγιος τοῦ Πρώτου", "base": "Pa (low Ke in some melodies)", "genus": "diatonic"}, "pl2": {"name": "Plagal Second Mode", "greek": "Ἦχος Πλάγιος τοῦ Δευτέρου", "base": "Pa", "genus": "hard chromatic"}, "gr": {"name": "Grave Mode", "greek": "Ἦχος Βαρύς", "base": "Ga or low Zo", "genus": "enharmonic (on Ga) / diatonic (on low Zo)"}, "pl4": {"name": "Plagal Fourth Mode", "greek": "Ἦχος Πλάγιος τοῦ Τετάρτου", "base": "Ni", "genus": "diatonic"}}, "drone": {"1": ["diatonic", "Pa"], "2": ["soft", "Di"], "3": ["enharmonic", "Ga"], "4": ["diatonic", "Vou"], "pl1": ["diatonic", "Pa"], "pl2": ["hard", "Pa"], "gr": ["enharmonic", "Ga"], "pl4": ["diatonic", "Ni"], "none": ["diatonic", "Ni"]}};
const PROGRESS_PATH = 'My Work/progress.json';
const LOG_PATH = 'My Work/Practice Log.md';
const DAYS_PER_WEEK = 6;

// ---------------- pure helpers (exported for tests) ----------------
const H = {};
H.iso = (d) => {
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
};
H.parse = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
H.addDays = (d, n) => { const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; };
H.diffDays = (a, b) => Math.round((Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) - Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) / 86400000);

// Orthodox Pascha (Meeus Julian algorithm) -> Gregorian date, valid 1900-2099
H.pascha = (year) => {
  const a = year % 4, b = year % 7, c = year % 19;
  const d = (19 * c + 15) % 30, e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31), day = ((d + e + 114) % 31) + 1;
  return H.addDays(new Date(year, month - 1, day), 13);
};
// Tone of the week. Returns {tone: 1..8|null, label, sunday: Date, special?}
H.TONE_KEYS = ['1', '2', '3', '4', 'pl1', 'pl2', 'gr', 'pl4'];
H.TONE_NAMES = ['First Mode', 'Second Mode', 'Third Mode', 'Fourth Mode', 'Plagal First Mode', 'Plagal Second Mode', 'Grave Mode', 'Plagal Fourth Mode'];
H.toneForSunday = (sunday) => {
  const y = sunday.getFullYear();
  let p = H.pascha(y);
  const palm = H.addDays(p, -7), thomas = H.addDays(p, 7);
  if (sunday >= palm && sunday < thomas) return { tone: null, special: sunday.getTime() === p.getTime() ? 'Pascha' : (sunday.getTime() === palm.getTime() ? 'Palm Sunday' : 'Holy/Bright Week') };
  let start = thomas;
  if (sunday < palm) start = H.addDays(H.pascha(y - 1), 7);
  const weeks = Math.floor(H.diffDays(start, sunday) / 7);
  return { tone: (weeks % 8) + 1 };
};
H.weekTone = (today) => {
  const dow = today.getDay();
  const lastSun = H.addDays(today, -dow);
  const nextSun = dow === 0 ? today : H.addDays(today, 7 - dow);
  return { current: Object.assign({ sunday: lastSun }, H.toneForSunday(lastSun)), coming: Object.assign({ sunday: nextSun }, H.toneForSunday(nextSun)) };
};

// learning days (Mon-Sat) from start (inclusive) to today (inclusive)
H.learningDaysBetween = (start, today) => {
  if (today < start) return 0;
  let n = 0;
  const total = H.diffDays(start, today);
  for (let i = 0; i <= total; i++) { if (H.addDays(start, i).getDay() !== 0) n++; }
  return n;
};
H.projectFinish = (today, remaining) => {
  let d = today, left = remaining;
  while (left > 0) { d = H.addDays(d, 1); if (d.getDay() !== 0) left--; }
  return d;
};

// ---------- scales (72 moria) ----------
H.DEG = ['Ni', 'Pa', 'Vou', 'Ga', 'Di', 'Ke', 'Zo'];
H.DIAT_POS = [0, 12, 22, 30, 42, 54, 64];
H.GENERA = {
  diatonic: { label: 'Diatonic', anchor: 0, steps: [12, 10, 8, 12, 12, 10, 8] },
  soft: { label: 'Soft chromatic', anchor: 0, steps: [8, 14, 8, 12, 8, 14, 8] },
  hard: { label: 'Hard chromatic', anchor: 1, steps: [6, 20, 4, 12, 6, 20, 4] },
  enharmonic: { label: 'Enharmonic (approx.)', anchor: 3, steps: [12, 12, 6, 12, 12, 12, 6] },
};
// position (moria above Ni) of absolute degree index k (0 = Ni, 7 = Ni', -1 = low Zo)
H.posOf = (genus, k) => {
  const g = H.GENERA[genus] || H.GENERA.diatonic;
  const a = g.anchor;
  let pos = H.DIAT_POS[a];
  if (k >= a) { for (let i = a; i < k; i++) pos += g.steps[((i - a) % 7 + 7) % 7]; }
  else { for (let i = a; i > k; i--) pos -= g.steps[(((i - 1 - a) % 7) + 7) % 7]; }
  return pos;
};
H.degName = (k) => {
  const base = H.DEG[((k % 7) + 7) % 7];
  const oct = Math.floor(k / 7);
  return oct === 0 ? base : oct > 0 ? base + "'".repeat(oct) : 'low ' + base;
};
H.degIndex = (name) => H.DEG.indexOf(name);
H.freq = (niHz, moria) => niHz * Math.pow(2, moria / 72);
H.moriaFromFreq = (niHz, f) => 72 * Math.log2(f / niHz);
H.nearestDegree = (genus, moria) => {
  let best = null;
  for (let k = -7; k <= 14; k++) {
    const p = H.posOf(genus, k), dev = moria - p;
    if (!best || Math.abs(dev) < Math.abs(best.dev)) best = { k, dev };
  }
  return best;
};
// autocorrelation pitch detection; returns Hz or -1
H.detectPitch = (buf, sampleRate) => {
  const n = buf.length;
  let rms = 0;
  for (let i = 0; i < n; i++) rms += buf[i] * buf[i];
  rms = Math.sqrt(rms / n);
  if (rms < 0.01) return -1;
  const minLag = Math.floor(sampleRate / 1000), maxLag = Math.floor(sampleRate / 60);
  let bestLag = -1, best = 0;
  const corr = new Float32Array(maxLag + 2);
  for (let lag = minLag; lag <= maxLag + 1; lag++) {
    let s = 0;
    for (let i = 0; i < n - lag; i++) s += buf[i] * buf[i + lag];
    corr[lag] = s / (n - lag);
  }
  // first strong peak (avoid octave errors): find max, then earliest peak >= 0.9*max
  for (let lag = minLag; lag <= maxLag; lag++) if (corr[lag] > best) { best = corr[lag]; bestLag = lag; }
  if (bestLag < 0 || best <= 0) return -1;
  for (let lag = minLag + 1; lag < maxLag; lag++) {
    if (corr[lag] > 0.9 * best && corr[lag] >= corr[lag - 1] && corr[lag] >= corr[lag + 1]) { bestLag = lag; break; }
  }
  const y1 = corr[bestLag - 1] || 0, y2 = corr[bestLag], y3 = corr[bestLag + 1] || 0;
  const denom = (y1 - 2 * y2 + y3);
  const shift = denom !== 0 ? 0.5 * (y1 - y3) / denom : 0;
  return sampleRate / (bestLag + shift);
};

// ---------- spaced review ----------
H.INTERVALS = [0, 1, 3, 7, 14, 30, 60];
H.grade = (card, grade, today) => {
  const c = Object.assign({ box: 0 }, card);
  if (grade === 'again') c.box = 0;
  else if (grade === 'good') c.box = Math.min(c.box + 1, H.INTERVALS.length - 1);
  else if (grade === 'easy') c.box = Math.min(c.box + 2, H.INTERVALS.length - 1);
  const days = grade === 'again' ? 1 : H.INTERVALS[c.box];
  c.due = H.iso(H.addDays(today, days));
  c.seen = (c.seen || 0) + 1;
  return c;
};
H.dueCards = (cards, state, currentWeek, todayIso, newLimit) => {
  const due = [], fresh = [];
  for (const c of cards) {
    if (c.week > currentWeek) continue;
    const s = state[c.id];
    if (!s) fresh.push(c);
    else if (s.due <= todayIso) due.push(c);
  }
  const newToday = Object.values(state).filter((s) => s.introduced === todayIso).length;
  return due.concat(fresh.slice(0, Math.max(0, newLimit - newToday)));
};

// ---------------- plugin ----------------
class FrequentChantPlugin extends Plugin {
  async onload() {
    this.H = H;
    this.data = DATA;
    this.progress = await this.loadProgress();
    this.audio = null;
    this.registerMarkdownCodeBlockProcessor('psaltiki-today', (src, el, ctx) => this.renderToday(el, ctx));
    this.registerMarkdownCodeBlockProcessor('psaltiki-review', (src, el, ctx) => this.renderReview(el, ctx));
    this.registerMarkdownCodeBlockProcessor('psaltiki-drone', (src, el, ctx) => this.renderDrone(el, ctx, this.parseOpts(src)));
    this.registerMarkdownCodeBlockProcessor('psaltiki-plan', (src, el, ctx) => this.renderPlan(el, ctx));
    this.registerMarkdownCodeBlockProcessor('psaltiki-tone', (src, el, ctx) => this.renderTone(el, ctx));
    this.addCommand({ id: 'open-home', name: 'Open Home', callback: () => this.app.workspace.openLinkText('Home', '', false) });
    this.addCommand({ id: 'stop-sound', name: 'Stop drone and sounds', callback: () => this.stopAll() });
    this.addRibbonIcon('music', 'Frequent Chant: Home', () => this.app.workspace.openLinkText('Home', '', false));
    this.addSettingTab(new PsaltiSettings(this.app, this));
    this.app.workspace.onLayoutReady(() => {
      if (!this.app.workspace.getActiveFile()) this.app.workspace.openLinkText('Home', '', false);
    });
  }
  onunload() { this.stopAll(); }

  parseOpts(src) {
    const o = {};
    (src || '').split('\n').forEach((l) => { const m = l.match(/^\s*(\w+)\s*:\s*(.+?)\s*$/); if (m) o[m[1]] = m[2]; });
    return o;
  }

  // ---------- progress persistence ----------
  defaultProgress() {
    return { version: 1, startDate: null, completed: [], cards: {}, sundays: {}, settings: { niHz: 130.81, newCardsPerDay: 5, ear: 'diatonic' } };
  }
  async loadProgress() {
    const ad = this.app.vault.adapter;
    try {
      if (await ad.exists(PROGRESS_PATH)) {
        const p = JSON.parse(await ad.read(PROGRESS_PATH));
        const d = this.defaultProgress();
        return Object.assign(d, p, { settings: Object.assign(d.settings, p.settings || {}) });
      }
    } catch (e) { console.error('Frequent Chant: could not read progress', e); new Notice('Frequent Chant: progress.json could not be read; starting fresh view (file untouched).'); this.readOnly = true; }
    return this.defaultProgress();
  }
  async saveProgress() {
    if (this.readOnly) { new Notice('Frequent Chant: progress file is unreadable, not saving. Fix or delete My Work/progress.json.'); return; }
    const ad = this.app.vault.adapter;
    if (!(await ad.exists('My Work'))) await this.app.vault.createFolder('My Work');
    await ad.write(PROGRESS_PATH, JSON.stringify(this.progress, null, 1));
    this.refreshAll();
  }
  refreshAll() {
    for (const fn of this.refreshers || []) { try { fn(); } catch (e) { /* view gone */ } }
  }
  addRefresher(el, fn) {
    this.refreshers = (this.refreshers || []).filter((f) => f.el && f.el.isConnected);
    fn.el = el;
    this.refreshers.push(fn);
  }

  today() { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  totalDays() { return this.data.weeks.length * DAYS_PER_WEEK; }
  dayInfo(n) {
    const w = Math.floor((n - 1) / DAYS_PER_WEEK), d = (n - 1) % DAYS_PER_WEEK;
    const wk = this.data.weeks[Math.min(w, this.data.weeks.length - 1)];
    return { n, weekIndex: w + 1, dayInWeek: d + 1, week: wk, day: wk.days[d] };
  }
  currentDayNumber() { return Math.min(this.progress.completed.length + 1, this.totalDays()); }
  isFinished() { return this.progress.completed.length >= this.totalDays(); }
  doneToday() { const t = H.iso(this.today()); return this.progress.completed.filter((c) => c.date === t).length; }
  pace() {
    const p = this.progress;
    if (!p.startDate) return null;
    const t = this.today();
    const expected = Math.min(H.learningDaysBetween(H.parse(p.startDate), t), this.totalDays());
    const done = p.completed.length;
    const remaining = this.totalDays() - done;
    return { expected, done, diff: done - expected, finish: H.projectFinish(t, remaining), remaining };
  }

  async completeDay(rating, note) {
    const p = this.progress;
    const t = H.iso(this.today());
    if (!p.startDate) p.startDate = t;
    const info = this.dayInfo(this.currentDayNumber());
    p.completed.push({ day: info.n, date: t, rating: rating || null, note: note || '' });
    await this.appendLog(`- ${t} · Day ${info.n} (W${String(info.weekIndex).padStart(2, '0')} D${info.dayInWeek}) · ${info.week.title}${rating ? ' · ' + '★'.repeat(rating) + '☆'.repeat(5 - rating) : ''}${note ? ' · ' + note.replace(/\n/g, ' ') : ''}`);
    await this.saveProgress();
    new Notice(`Day ${info.n} done. ${this.totalDays() - p.completed.length} to go.`);
  }
  async undoDay() {
    const p = this.progress;
    if (!p.completed.length) return;
    const last = p.completed.pop();
    await this.appendLog(`- ${H.iso(this.today())} · undo: Day ${last.day} unmarked`);
    if (!p.completed.length) p.startDate = null;
    await this.saveProgress();
  }
  async appendLog(line) {
    const ad = this.app.vault.adapter;
    if (!(await ad.exists('My Work'))) await this.app.vault.createFolder('My Work');
    if (!(await ad.exists(LOG_PATH))) await ad.write(LOG_PATH, '# Practice Log\n\nThis log fills in automatically each time you mark a day done. Add your own notes anywhere.\n\n');
    await ad.append(LOG_PATH, line + '\n');
  }

  async md(el, text, ctx) {
    const comp = this;
    if (MarkdownRenderer.render) await MarkdownRenderer.render(this.app, text, el, ctx.sourcePath, comp);
    else await MarkdownRenderer.renderMarkdown(text, el, ctx.sourcePath, comp);
    el.querySelectorAll('a.internal-link').forEach((a) => {
      a.addEventListener('click', (e) => { e.preventDefault(); this.app.workspace.openLinkText(a.getAttribute('data-href') || a.getAttribute('href'), ctx.sourcePath, e.ctrlKey || e.metaKey); });
    });
  }

  // ---------- TODAY ----------
  renderToday(root, ctx) {
    const draw = async () => {
      root.empty();
      const box = root.createDiv({ cls: 'psq psq-today' });
      const t = this.today();
      const isSunday = t.getDay() === 0;
      const p = this.progress;
      if (this.isFinished()) {
        box.createEl('h2', { text: 'Year one complete' });
        box.createEl('p', { text: `You finished all ${this.totalDays()} days. Open Year Review and plan year two.` });
        this.toneMini(box);
        return;
      }
      const n = this.currentDayNumber();
      const info = this.dayInfo(n);
      const head = box.createDiv({ cls: 'psq-head' });
      head.createDiv({ cls: 'psq-kicker', text: info.week.block });
      head.createEl('h2', { text: `Day ${n} of ${this.totalDays()}` });
      head.createDiv({ cls: 'psq-sub', text: `Week ${info.weekIndex} · ${info.week.title} · day ${info.dayInWeek} of 6` });
      const bar = box.createDiv({ cls: 'psq-bar' });
      bar.createDiv({ cls: 'psq-bar-fill' }).style.width = `${(100 * p.completed.length / this.totalDays()).toFixed(1)}%`;

      const pace = this.pace();
      const paceEl = box.createDiv({ cls: 'psq-pace' });
      if (!pace) paceEl.setText('Your pace clock starts when you mark Day 1 done. The plan is six days a week, about 15 minutes a day, with Sundays off for services.');
      else {
        const s = pace.diff === 0 ? 'On pace.' : pace.diff > 0 ? `${pace.diff} day${pace.diff > 1 ? 's' : ''} ahead.` : `${-pace.diff} day${pace.diff < -1 ? 's' : ''} behind. That's fine; just do the next day. You can catch up one extra day per sitting.`;
        paceEl.setText(`${s} At six days a week from here, you'd finish on ${pace.finish.toDateString()}.`);
        paceEl.addClass(pace.diff < -6 ? 'psq-warn' : 'psq-ok');
      }

      this.toneMini(box);

      const doneToday = this.doneToday();
      if (isSunday && doneToday === 0) {
        const s = box.createDiv({ cls: 'psq-card psq-sunday' });
        s.createEl('h3', { text: 'Sunday: service day' });
        s.createEl('p', { text: 'No new lesson today. Chant at the service and notice one thing you read well and one thing you missed. Write a line below if you like. Your review cards are still available.' });
        const ta = s.createEl('textarea', { cls: 'psq-note', attr: { placeholder: 'One line about today at the analogion…' } });
        ta.value = (p.sundays && p.sundays[H.iso(t)]) || '';
        const b = s.createEl('button', { text: 'Save Sunday note', cls: 'mod-cta' });
        b.onclick = async () => { p.sundays[H.iso(t)] = ta.value; await this.appendLog(`- ${H.iso(t)} · Sunday · ${ta.value.replace(/\n/g, ' ')}`); await this.saveProgress(); new Notice('Saved'); };
        const cu = s.createEl('button', { text: 'Do a catch-up day anyway' });
        cu.onclick = () => { this.sundayOverride = H.iso(t); draw(); };
        if (this.sundayOverride !== H.iso(t)) { this.reviewTeaser(box); return; }
      }

      if (doneToday > 0 && !this.continueOverride) {
        const c = box.createDiv({ cls: 'psq-card psq-done' });
        c.createEl('h3', { text: `Done for today (${doneToday} day${doneToday > 1 ? 's' : ''} completed)` });
        c.createEl('p', { text: `Up next: Day ${n}, ${info.week.title}.` });
        const behind = pace && pace.diff < 0;
        if (doneToday < 2) {
          const go = c.createEl('button', { text: behind ? 'Catch up: do the next day now' : 'Start the next day early' });
          go.onclick = () => { this.continueOverride = true; draw(); };
        } else c.createEl('p', { cls: 'psq-muted', text: 'Two days in one sitting is the cap. The rest keeps until tomorrow.' });
        const un = c.createEl('button', { text: 'Undo last day' });
        un.onclick = () => this.undoDay();
        this.reviewTeaser(box);
        return;
      }

      // three parts
      const parts = box.createDiv({ cls: 'psq-parts' });
      const r = parts.createDiv({ cls: 'psq-card' });
      r.createEl('h3', { text: '1 · Review (about 4 minutes)' });
      const due = this.dueList();
      r.createEl('p', { text: due.length ? `${due.length} card${due.length > 1 ? 's' : ''} due.` : 'Nothing due. Nice.' });
      if (due.length) { const rb = r.createEl('button', { text: 'Review now' }); rb.onclick = () => { const holder = r.createDiv(); rb.remove(); this.reviewSession(holder, ctx); }; }

      const m = parts.createDiv({ cls: 'psq-card psq-main' });
      m.createEl('h3', { text: '2 · Read and sing (about 8 minutes)' });
      const mt = m.createDiv();
      await this.md(mt, info.day.main, ctx);
      const wl = m.createDiv({ cls: 'psq-muted' });
      await this.md(wl, `Week note: [[${info.week.file}|W${String(info.weekIndex).padStart(2, '0')} · ${info.week.title}]]`, ctx);

      const e = parts.createDiv({ cls: 'psq-card' });
      const mode = info.day.mode || info.week.mode;
      const preset = this.data.drone[mode || 'none'] || ['diatonic', 'Ni'];
      e.createEl('h3', { text: '3 · Ear and pitch (about 3 minutes)' });
      e.createEl('p', { text: `Drone on ${preset[1]}, ${H.GENERA[preset[0]].label.toLowerCase()}${mode ? ` (${this.data.modes[mode].name})` : ''}. Sing the scale against it, or take 8 ear-quiz questions.` });
      const eb = e.createEl('button', { text: 'Open drone and ear quiz' });
      eb.onclick = () => { eb.remove(); this.renderDrone(e.createDiv(), ctx, { genus: preset[0], base: preset[1] }); };

      const f = box.createDiv({ cls: 'psq-card psq-finish' });
      f.createEl('h3', { text: 'Finish' });
      const stars = f.createDiv({ cls: 'psq-stars' });
      let rating = 0;
      const sbtn = [];
      for (let i = 1; i <= 5; i++) {
        const b = stars.createEl('button', { text: '☆', cls: 'psq-star', attr: { 'aria-label': `${i} of 5` } });
        b.onclick = () => { rating = i; sbtn.forEach((x, j) => x.setText(j < i ? '★' : '☆')); };
        sbtn.push(b);
      }
      stars.createSpan({ cls: 'psq-muted', text: ' How did the reading go? (optional)' });
      const note = f.createEl('textarea', { cls: 'psq-note', attr: { placeholder: 'Optional note: what tripped you up?' } });
      const done = f.createEl('button', { text: `Mark Day ${n} done`, cls: 'mod-cta' });
      done.onclick = async () => { done.disabled = true; this.continueOverride = false; await this.completeDay(rating, note.value.trim()); };
      if (p.completed.length) { const un = f.createEl('button', { text: 'Undo last day' }); un.onclick = () => this.undoDay(); }
    };
    this.addRefresher(root, draw);
    draw();
  }

  reviewTeaser(box) {
    const due = this.dueList();
    if (!due.length) return;
    const r = box.createDiv({ cls: 'psq-card' });
    r.createEl('h3', { text: `Review: ${due.length} card${due.length > 1 ? 's' : ''} due` });
    const b = r.createEl('button', { text: 'Review now' });
    b.onclick = () => { b.remove(); this.reviewSession(r.createDiv(), { sourcePath: '' }); };
  }

  toneMini(box) {
    const wt = H.weekTone(this.today());
    const el = box.createDiv({ cls: 'psq-tone' });
    const fmt = (x) => x.tone ? H.TONE_NAMES[x.tone - 1] : x.special;
    const cur = wt.current, com = wt.coming;
    const same = cur.sunday.getTime() === com.sunday.getTime();
    el.createSpan({ cls: 'psq-tone-label', text: 'Tone of the week' });
    el.createSpan({ text: same ? ` ${fmt(com)} today.` : ` ${fmt(cur)} this week; this Sunday (${com.sunday.toDateString().slice(4, 10)}) is ${fmt(com)}.` });
  }

  // ---------- REVIEW ----------
  currentWeek() { return this.dayInfo(this.currentDayNumber()).weekIndex; }
  dueList() { return H.dueCards(this.data.cards, this.progress.cards, this.currentWeek(), H.iso(this.today()), this.progress.settings.newCardsPerDay || 5); }
  renderReview(root, ctx) {
    const draw = () => { root.empty(); const box = root.createDiv({ cls: 'psq' }); this.reviewSession(box, ctx); };
    draw();
  }
  reviewSession(box, ctx) {
    const queue = this.dueList().slice();
    const t = this.today();
    let shown = 0;
    const wrap = box.createDiv({ cls: 'psq-review' });
    const next = async () => {
      wrap.empty();
      if (!queue.length) {
        wrap.createEl('p', { text: shown ? `Review done (${shown} cards).` : 'No cards due right now. New cards unlock as you move through the weeks.' });
        return;
      }
      const c = queue[0];
      const card = wrap.createDiv({ cls: 'psq-flash' });
      card.createDiv({ cls: 'psq-muted', text: `${queue.length} left · unlocked in week ${c.week}` });
      if (c.glyph) card.createDiv({ cls: 'psq-glyph', text: c.glyph });
      card.createDiv({ cls: 'psq-front', text: c.front });
      const back = card.createDiv({ cls: 'psq-back' });
      back.style.display = 'none';
      await this.md(back, c.back, ctx);
      const row = card.createDiv({ cls: 'psq-row' });
      const show = row.createEl('button', { text: 'Show answer', cls: 'mod-cta' });
      show.onclick = () => {
        back.style.display = '';
        show.remove();
        const g = (label, grade) => {
          const b = row.createEl('button', { text: label });
          b.onclick = async () => {
            const prev = this.progress.cards[c.id];
            const s = H.grade(prev || { box: 0 }, grade, t);
            if (!prev) s.introduced = H.iso(t);
            else if (prev.introduced) s.introduced = prev.introduced;
            this.progress.cards[c.id] = s;
            queue.shift();
            if (grade === 'again') queue.push(c);
            shown++;
            await this.saveProgress();
            next();
          };
        };
        g('Again', 'again'); g('Good', 'good'); g('Easy', 'easy');
      };
    };
    next();
  }

  // ---------- AUDIO ----------
  ctxAudio() {
    if (!this.audio) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.audio = new AC();
    }
    if (this.audio.state === 'suspended') this.audio.resume();
    return this.audio;
  }
  stopAll() {
    if (this.drone) { try { this.drone.stop(); } catch (e) { } this.drone = null; }
    if (this.mic) { try { this.mic.stop(); } catch (e) { } this.mic = null; }
  }
  startDrone(hz) {
    const ac = this.ctxAudio();
    if (this.drone) this.drone.stop();
    const out = ac.createGain(); out.gain.value = 0; out.connect(ac.destination);
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.connect(out);
    const o1 = ac.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = hz;
    const o2 = ac.createOscillator(); o2.type = 'sine'; o2.frequency.value = hz / 2;
    const g2 = ac.createGain(); g2.gain.value = 0.6;
    o1.connect(lp); o2.connect(g2); g2.connect(lp);
    o1.start(); o2.start();
    out.gain.setTargetAtTime(0.12, ac.currentTime, 0.3);
    this.drone = { hz, stop: () => { out.gain.setTargetAtTime(0, ac.currentTime, 0.15); setTimeout(() => { try { o1.stop(); o2.stop(); } catch (e) { } }, 600); } };
  }
  playTone(hz, dur = 0.9) {
    const ac = this.ctxAudio();
    const g = ac.createGain(); g.gain.value = 0; g.connect(ac.destination);
    const o = ac.createOscillator(); o.type = 'triangle'; o.frequency.value = hz; o.connect(g);
    const t0 = ac.currentTime;
    g.gain.linearRampToValueAtTime(0.25, t0 + 0.03);
    g.gain.setTargetAtTime(0, t0 + dur - 0.2, 0.08);
    o.start(t0); o.stop(t0 + dur + 0.3);
  }

  // ---------- DRONE / EAR / TUNER ----------
  renderDrone(root, ctx, opts) {
    root.empty();
    const box = root.createDiv({ cls: 'psq psq-drone' });
    const state = { genus: (opts && opts.genus) || 'diatonic', base: (opts && opts.base) || 'Ni' };
    const ni = () => Number(this.progress.settings.niHz) || 130.81;
    const ctl = box.createDiv({ cls: 'psq-row' });
    const gsel = ctl.createEl('select');
    for (const [k, g] of Object.entries(H.GENERA)) gsel.createEl('option', { text: g.label, value: k });
    gsel.value = state.genus;
    const bsel = ctl.createEl('select');
    H.DEG.forEach((d) => bsel.createEl('option', { text: `Base ${d}`, value: d }));
    bsel.value = state.base;
    const dbtn = ctl.createEl('button', { text: 'Drone on', cls: 'mod-cta' });
    const stop = ctl.createEl('button', { text: 'Stop' });
    const keys = box.createDiv({ cls: 'psq-keys' });
    const info = box.createDiv({ cls: 'psq-muted' });
    const baseK = () => H.degIndex(state.base);
    const drawKeys = () => {
      keys.empty();
      const b = baseK();
      for (let k = b - 3; k <= b + 8; k++) {
        const pos = H.posOf(state.genus, k);
        const key = keys.createEl('button', { cls: 'psq-key' + (k === b ? ' psq-key-base' : ''), text: H.degName(k) });
        key.title = `${pos} moria above Ni`;
        key.onclick = () => this.playTone(H.freq(ni(), pos));
      }
      const steps = [];
      for (let k = b; k < b + 7; k++) steps.push(H.posOf(state.genus, k + 1) - H.posOf(state.genus, k));
      info.setText(`Steps upward from ${state.base}: ${steps.join(' – ')} moria. Ni = ${ni().toFixed(2)} Hz (change it in Settings → Frequent Chant).`);
    };
    gsel.onchange = () => { state.genus = gsel.value; drawKeys(); if (this.drone) this.startDrone(H.freq(ni(), H.posOf(state.genus, baseK()))); };
    bsel.onchange = () => { state.base = bsel.value; drawKeys(); if (this.drone) this.startDrone(H.freq(ni(), H.posOf(state.genus, baseK()))); };
    dbtn.onclick = () => this.startDrone(H.freq(ni(), H.posOf(state.genus, baseK())));
    stop.onclick = () => this.stopAll();
    drawKeys();

    // ear quiz
    const quiz = box.createDiv({ cls: 'psq-card' });
    quiz.createEl('h4', { text: 'Ear quiz' });
    const qtext = quiz.createDiv({ text: 'You hear the base, then a note. Tap the note\u2019s name. The drone stays off unless you turn it on.' });
    const qrow = quiz.createDiv({ cls: 'psq-keys' });
    const qscore = quiz.createDiv({ cls: 'psq-muted' });
    let score = 0, asked = 0, target = null;
    // With the drone off, the base sounds briefly first as the reference. The quiz never turns the drone on.
    const playQ = () => {
      if (target === null) return;
      const t = H.freq(ni(), H.posOf(state.genus, target));
      if (this.drone) { this.playTone(t, 1.2); return; }
      this.playTone(H.freq(ni(), H.posOf(state.genus, baseK())), 0.9);
      setTimeout(() => this.playTone(t, 1.2), 1100);
    };
    const ask = () => {
      const b = baseK();
      const opts = []; for (let k = b - 2; k <= b + 7; k++) opts.push(k);
      target = opts[Math.floor(Math.random() * opts.length)];
      playQ();
      qrow.empty();
      opts.forEach((k) => {
        const btn = qrow.createEl('button', { cls: 'psq-key', text: H.degName(k) });
        btn.onclick = () => {
          if (target === null) return;
          asked++;
          if (k === target) { score++; btn.addClass('psq-right'); qtext.setText(`Right: ${H.degName(target)}.`); }
          else { btn.addClass('psq-wrong'); qtext.setText(`It was ${H.degName(target)}.`); }
          target = null;
          qscore.setText(`Score: ${score}/${asked}`);
        };
      });
    };
    const qb = quiz.createDiv({ cls: 'psq-row' });
    qb.createEl('button', { text: 'Play a note', cls: 'mod-cta' }).onclick = ask;
    qb.createEl('button', { text: 'Replay' }).onclick = playQ;

    // tuner
    const tun = box.createDiv({ cls: 'psq-card' });
    tun.createEl('h4', { text: 'Pitch check (microphone)' });
    const tread = tun.createDiv({ cls: 'psq-tuner', text: '—' });
    const tdev = tun.createDiv({ cls: 'psq-muted', text: 'Sing a sustained note. Wear headphones so the drone doesn’t leak into the mic.' });
    const meter = tun.createDiv({ cls: 'psq-meter' });
    const needle = meter.createDiv({ cls: 'psq-needle' });
    const trow = tun.createDiv({ cls: 'psq-row' });
    const tb = trow.createEl('button', { text: 'Start listening' });
    tb.onclick = async () => {
      if (this.mic) { this.mic.stop(); this.mic = null; tb.setText('Start listening'); return; }
      try {
        const ac = this.ctxAudio();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
        const src = ac.createMediaStreamSource(stream);
        const an = ac.createAnalyser(); an.fftSize = 4096; src.connect(an);
        const buf = new Float32Array(an.fftSize);
        let raf = 0, alive = true;
        const loop = () => {
          if (!alive) return;
          an.getFloatTimeDomainData(buf);
          const f = H.detectPitch(buf, ac.sampleRate);
          if (f > 0) {
            const mo = H.moriaFromFreq(ni(), f);
            const nd = H.nearestDegree(state.genus, mo);
            tread.setText(H.degName(nd.k));
            tdev.setText(`${f.toFixed(1)} Hz · ${nd.dev >= 0 ? '+' : ''}${nd.dev.toFixed(1)} moria from ${H.degName(nd.k)} (${H.GENERA[state.genus].label})`);
            needle.style.left = `${50 + Math.max(-6, Math.min(6, nd.dev)) * (50 / 6)}%`;
            meter.toggleClass('psq-in', Math.abs(nd.dev) <= 2);
          }
          raf = window.requestAnimationFrame(loop);
        };
        loop();
        this.mic = { stop: () => { alive = false; window.cancelAnimationFrame(raf); stream.getTracks().forEach((t) => t.stop()); } };
        tb.setText('Stop listening');
      } catch (e) { new Notice('Microphone not available: ' + e.message); }
    };
  }

  // ---------- PLAN ----------
  renderPlan(root, ctx) {
    const draw = async () => {
      root.empty();
      const box = root.createDiv({ cls: 'psq psq-plan' });
      const done = this.progress.completed.length;
      let lastBlock = '';
      let md = '';
      this.data.weeks.forEach((w, i) => {
        if (w.block !== lastBlock) { md += `\n#### ${w.block}\n`; lastBlock = w.block; }
        const first = i * DAYS_PER_WEEK + 1, last = first + DAYS_PER_WEEK - 1;
        const d = Math.max(0, Math.min(DAYS_PER_WEEK, done - first + 1));
        const mark = d === DAYS_PER_WEEK ? '✓' : d > 0 ? '▸' : '○';
        md += `- ${mark} [[${w.file}|W${String(i + 1).padStart(2, '0')} · ${w.title}]] · days ${first}–${last}${d > 0 && d < 6 ? ` (${d}/6)` : ''}\n`;
      });
      await this.md(box, md, ctx);
    };
    this.addRefresher(root, draw);
    draw();
  }
  renderTone(root) {
    root.empty();
    const box = root.createDiv({ cls: 'psq' });
    const t = this.today();
    const list = box.createEl('ul');
    const dow = t.getDay();
    let s = dow === 0 ? t : H.addDays(t, 7 - dow);
    for (let i = 0; i < 10; i++) {
      const x = H.toneForSunday(s);
      list.createEl('li', { text: `${s.toDateString()}: ${x.tone ? H.TONE_NAMES[x.tone - 1] + ` (Tone ${x.tone})` : x.special}` });
      s = H.addDays(s, 7);
    }
    box.createDiv({ cls: 'psq-muted', text: `Pascha ${t.getFullYear()}: ${H.pascha(t.getFullYear()).toDateString()}. The cycle starts at Tone 1 in the week after Pascha (Thomas Sunday) and runs until Palm Sunday.` });
  }
}

class PsaltiSettings extends PluginSettingTab {
  constructor(app, plugin) { super(app, plugin); this.plugin = plugin; }
  display() {
    const { containerEl } = this;
    const p = this.plugin;
    containerEl.empty();
    containerEl.createEl('h2', { text: 'Frequent Chant' });
    new Setting(containerEl).setName('Pitch of Ni (Hz)').setDesc('Sets the pitch of the drone and the tuner. Ni = 130.81 Hz is a low C, a comfortable range for many men; try 196 Hz (G) or 220 Hz (A) for higher voices.')
      .addText((t) => t.setValue(String(p.progress.settings.niHz)).onChange(async (v) => { const n = Number(v); if (n > 40 && n < 1000) { p.progress.settings.niHz = n; await p.saveProgress(); } }));
    new Setting(containerEl).setName('New review cards per day').addText((t) => t.setValue(String(p.progress.settings.newCardsPerDay)).onChange(async (v) => { const n = parseInt(v); if (n >= 0 && n < 50) { p.progress.settings.newCardsPerDay = n; await p.saveProgress(); } }));
    new Setting(containerEl).setName('Jump to day').setDesc('Marks every earlier day as done without ratings. Use this if you already know Block 1 or you are moving over from paper.')
      .addText((t) => { t.setPlaceholder('e.g. 49'); this.jump = t; })
      .addButton((b) => b.setButtonText('Jump').onClick(async () => {
        const n = parseInt(this.jump.getValue());
        if (!(n >= 1 && n <= p.totalDays())) { new Notice('Enter a day between 1 and ' + p.totalDays()); return; }
        const today = H.iso(p.today());
        p.progress.completed = [];
        for (let i = 1; i < n; i++) p.progress.completed.push({ day: i, date: 'skipped', rating: null, note: 'jumped' });
        p.progress.startDate = today;
        // shift pace start so that skipped days count as already on pace
        let s = p.today(), back = n - 1;
        while (back > 0) { s = H.addDays(s, -1); if (s.getDay() !== 0) back--; }
        p.progress.startDate = H.iso(s);
        await p.appendLog(`- ${today} · jumped to Day ${n}`);
        await p.saveProgress();
        new Notice('Now on Day ' + n);
      }));
    new Setting(containerEl).setName('Reset all progress').setDesc('Clears days, review cards and the pace clock. Your Practice Log is kept.')
      .addButton((b) => b.setButtonText('Reset').setWarning().onClick(async () => {
        if (!window.confirm('Reset all Frequent Chant progress?')) return;
        p.progress = p.defaultProgress(); await p.saveProgress(); new Notice('Progress reset');
      }));
  }
}

module.exports = FrequentChantPlugin;
module.exports.H = H;
