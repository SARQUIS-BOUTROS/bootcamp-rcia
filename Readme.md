#  Bootcamp ReactJs - Resistencia Session

This repo aim to serve as a playground where anyone who’s willing to learn react from zero to hero.

We did our best in putting resources that help you in this journey of learning [Reactjs](https://reactjs.org/)

..so let's start 💪

# Getting Started

So, you begin by cloning this repo, and starting from day 1 to day 16 you take each challenge and send a Pull Request using [github page](https://help.github.com/articles/creating-a-pull-request/) as you finish them

## How to use this repo

Starting by cloning this repo

```
    git clone https://github.com/gustavo-gimenez/bootcamp-rcia.git

```
Then, you read and study a subject, let's say [05-js-basico](https://github.com/gustavo-gimenez/bootcamp-rcia/tree/master/05-js-basico "05-js-basico").
Then you want to start the coding part for this subject, so you [create a branch](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches), like
We ensure we are allocated in master and it's up to day, before we can create a new one

```
    git checkout master
    git pull origin master

```
Then, we actually create the branch using a patter as name **NameLastname-day-[number]-[subject title]**
 

```
    git checkout -b GustavoGimenez-day-05-js-basico

```
## Commits and Push from Command line

You want to use some good practice for commits, [here](https://github.com/trein/dev-best-practices/wiki/Git-Commit-Best-Practices) We recommend you to read at least the first 6 section about how commits in git
First of all, we check any changes we have done

```
    git status

```
Then we add them to the pipe of changes we want to commit

```
    git add .

```
Finally, we commit to the  branch, in this example GustavoGimenez-day-05-js-basico. We propose you to follow same pattern in example bellow to write a proper commit message

```
    git commit -m "day-05-js-basico: First commit, writing functions signature, implementation commit later"

```
Suddenly, you can have changes you don't want to commit yet, but you need to switch to another branch for quick change you have being asking for, there is when **[git stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)** can save your day

Saving temporary changes you haven't commit yet

```
    git stash

```
To re-apply them
```
    git stash pop
```
Pushing your branch and changes
```
    git push origin GustavoGimenez-day-05-js-basico
```
## Making a PR

[Here](https://help.github.com/articles/creating-a-pull-request/) you will find how to create a PR from github page.
The easy way is by using a link prompt to you from the terminal
```
    git push origin someBranch
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 313 bytes | 0 bytes/s, done.
    Total 3 (delta 2), reused 0 (delta 0)
    remote:
    remote: **Create pull request for someBranch:**
    remote:   https://bitbucket.mydomain.com/projects/PRO/repos/someRepo/compare/commits?sourceBranch=refs/heads/someBranch
    ...
```
## Removing branch

Coming soon
