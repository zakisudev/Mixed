#include <stdio.h>
#include <stdlib.h>

int main()
{
    int ch;

    printf("Please type in one character:\n"); // Denis Ritchie @ AT & T Bell labs
    ch=getc(stdin);
    printf("The character you just entered is: %c\n", ch);
    return 0;
}
