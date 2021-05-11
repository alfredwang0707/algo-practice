def shortest():
    # shortest
    # //stack over flow error

# stack is first in last out , like a stack of cards
# add to the top of the stack => pushing
# removing from the top of the stacked => popping
# tail recursion / rabit hole? 
spam = []
spam.append('alice')
spam.append('bob')
spam.append('carol'
spam.pop()
>>>'carol')
spam => ['alice', 'bob']

def countdown(i):
    print i
    if i <= 1: #base case
        return
    else:
    countdown(i-1)  #recursive case


Factorial

Number! = Number x (Number -1)
def factorial(number)
if number == 1:
    return 1 # base case
    return number * factorial(number - 1)
// overflow 
print(factorial(5))

iterative way
def factorial(number)
    total = 1
    for i in range(1, number):
        total *= i
    return total
print (factorial(5))

#tree and back tracking
# list / maze /giant tree with node
#path finding 
# folders under folders  

Fibonacci Sequence
1,1,2,3,5,8,13,21,34

fib(1) = 1, fib(2) =1 , fib(3) =2, fib(4) =3

fib(N) = fib(N-1) + fib(N-2)
fib(1) and fib(2 = 1 )

def fib(nthNumber ):
    if nthNumber == 1 or nthNumber == 2:
        return 1
    else:
        return fib(nthNumber -2) + fib(nthNumber -1 )
        #imagine cutting a hdras head off, 2 more grows


#Recursive Fibonacci with Memoization
#memoization speed up recursive algo by caching return
FIB_CACHE = {}
def fib(nthNumber)
    if nthNumber in FIB_CACHE:
        return FIBCACHE[nthNumber]
    if nthNumber ==1 or nthNumber ==2:
        #BASE CASE
        return 1
    else:
        #RECURSIVE CASE
        FIB_CACHE[nthNumber] = fib(nthNumber -2 ) + fib(nthNumber -1)
        return FIB_CACHE[nthNumber]
    