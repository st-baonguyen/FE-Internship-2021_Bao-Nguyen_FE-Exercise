###### What are the differences between a variable that is: `null`, `undefined`?

null là biến không tồn tại
undefined là biến được khai báo nhưng không được gán giá trị

###### The use strict literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake:

###### Advantages

1. Eliminate some unreasonable and imprecise aspects of Javascript syntax and reduce some weird behaviors.
2. Eliminate some insecure parts of the code to ensure the security of the code.
3. Improve compiler efficiency and increase running speed.
4. Pave the way for a new version of Javascript in the future.

###### Disadvantages: Now the JS of the site will be compressed, some files use strict mode, while others do not. At this time, these files, which were originally strict patterns, were merged, and the string reached the middle of the file. Not only did it not indicate strict mode, but it wasted bytes after compression.

###### FALSE group:

- undefined
- null
- NaN
- 0
- false
- ""(empty string).
