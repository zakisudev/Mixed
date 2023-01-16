# include <stdio.h>
# include <cs50.h>

int main(void)
{
    int h;
    int s;
    char H;
    //ask the user for Height
    do 
    {
        h = get_int("Height: ");
    }
    while (h <= 0 || h >= 9);
    //iterate the last action at the beginning
    for (int i = 1; i <= h; i++)
    {
        //iterate the spaces needed
        for (s = (h - i); s >= 1; s--)
        {
            printf(" ");
        }
        //iterate the hashes indirectly according to the users Height value
        for (H = 2; H <= (i + 1); H++)
        {
            printf("#");    
        }
        printf("\n");
    }
    return 0;
}
