# Pig Latin Translator

#### An application that translates a sentence into Pig Latin, 08.17.2016

#### By **Lisa MacCarrigan and Ian Baum**

## Description

This is an application that translates a sentence into Pig Latin using conditional logic.

## Specifications

#### 1. Collect user's input and split it into an array

* Example Input: user's sentence
* Example Output: "u","s","e","r","'","s"," ","s","e","n","t","e","n","c","e"

#### 2. Do nothing to non-alphabetical characters, since they do not contain consonants or vowels.

* Example Input: 3
* Example Output: 3

#### 3. Add "ay" to the end of single-letter words beginning with a vowel.

* Example Input: i
* Example Output: iay

#### 4. Add "ay" to the end of words beginning with a vowel.

* Example Input: apple
* Example Output: appleay

#### 5. For words beginning with one consonant, move the first consonant to the end of the word, and add "ay".

* Example Input: kitten
* Example Output: ittenkay

#### 6. For words beginning with more than one consonant, move all of the first consecutive consonants to the end, and add "ay".

* Example Input: dragon
* Example Output: agondray

#### 7. For words beginning with "qu", move the "u" along with the "q".

* Example Input: quack
* Example Output: ackquay

#### 8. If the first consonants include "qu", move the "u" along with the "q".

* Example Input: squeal
* Example Output: ealsquay

#### 9. For words beginning with "y", treat "y" as a consonant.

* Example Input: your
* Example Output: youray

## Setup/Installation Requirements

* Clone this repository
* If editing, open project directory in Code Editor of choice
* If viewing, open index.html in a web browser

## Known Bugs

No known bugs.

## Support and contact details

For comments or questions, please email Lisa.MacCarrigan@gmail.com or ian@ianbaum.com

## Technologies Used

HTML
CSS
JavaScript
jQuery version 3.1.0.
Bootstrap version 3.3.7.

### License

*This application is licensed under the MIT license*

Copyright (c) 2016 **Lisa MacCarrigan and Ian Baum**
