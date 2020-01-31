# _Pig Latin Translator_

#### _A smart translation program, 01.30.2020_

#### By _**Krista Rutz, Steven Fleming, and Jack Dunning**_

## Description

_Pig Latin is a language game derived from English where speakers add endings to words based on the first letter of the word. This translator takes text as an input and outputs the translated string._

## Setup/Installation Requirements

To view this project:

* _Open the [GitHub pages](https://kristarutz.github.io/pig-latin-translator/) link to view the deployed project_

## Specifications

<details>
  <summary>Expand specs for this project</summary>
 
 * get an input string -- can be split word/character-wise into an array
 
 * ignore non-letter characters (IN: 98! OUT: 98!)

 * one letter words: Just add ay (IN: I OUT: Iay)

 * push first letter to end with "ay" (word with single starting consonant. IN: "cat" OUT: "atcay")

 * don't push first letter to end, just add "way" (IN: word starting with vowel. OUT: same word+ay. IN: "apple" OUT: "appleway")

* if Y is the first letter, treat as consonant. (IN: yolanda OUT: olandayay)

 * push consonant group to end with "ay" (IN: "snapple" OUT: "applesnay)

 * If Y is not first letter, treat as vowel (IN: typhoon. OUT: yphoontay)

 * If a "qu" are the first two letters, move BOTH to end (IN: queen OUT: eenquay)

 * If "qu" is part of the initial consonant group, include "u" on end (IN: squall OUT: allsquay)

 * multiple words work (IN: sad cat OUT: adsay atcay)

 * return to user as a normal looking word (string?)

Examples:

Hello, friend!
Ellohay, iendfray!

don't cry
on'tday ycray

you
ouyay

non-profit
on-profitnay

</details>


## Known Bugs

No known bugs. Some links are currently disabled while the website is in beta.

## Support and contact details

Please contact me if you run into any issues or have questions, ideas or concerns.  I can be contacted at <krista.rutz@pomona.edu>. _Contributions to the code are encouraged!_

## Technologies Used

* HTML, CSS, and JS (jQuery)
* Responsive design using Bootstrap framework

### License

*This software is licensed under the Attribution-NonCommercial 4.0 International [(CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/legalcode)*

Copyright (c) 2020 **_Krista Rutz, Jack Dunning, Steven Fleming_**

##### You are free to:
**Share** — copy and redistribute the material in any medium or format
**Adapt** — remix, transform, and build upon the material
_The licensor cannot revoke these freedoms as long as you follow the license terms._
Under the following terms:
**Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

**NonCommercial** — You may not use the material for commercial purposes.

**No additional restrictions** — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
_Notices:
You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material._
