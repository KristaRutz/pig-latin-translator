
### SPECS

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





 Hello, friend!
 Ellohay, iendfray!

don't cry
don't + cry
"d" "o" "n" "'" "t" 
on'tday ycray

you
ouyay

non-profit
onnay-ofitpray
on-profitnay

18

f&#*



 -retain capitalization
 -know where punctuation is
 -know where spaces are
 -know what the beginning of a word is (single word)
 -know what the end of a word is (multiple words)
 -recognize alphabet characters
 -recognize non-alphabet characters 
   -symbols "in" words: - '
   -symbols that aren't in words: . ? ! / () " ' : ; , & 