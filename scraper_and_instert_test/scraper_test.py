import requests
from bs4 import BeautifulSoup as bs
from urllib.parse import urljoin
from plo_db import insertProgs


# merges prog names and prog depts into one list of tuples to feed to the db
def merge(list1, list2):

    prog_list = [(list1[i], list2[i]) for i in range(0, len(list1))]

    return prog_list


# scrapes prog names and prog depts then makes a list for each
def scrape_progs():

    base_url = "https://programs.butte.edu/ProgramList/All/13/false"
    r = requests.get(base_url)
    soup = bs(r.content, 'html.parser')

    # lists to hold prog names and prog depts
    name_list = []
    dept_list = []


    t_body = soup.find("tbody")

    aTags = t_body.find_all('a')

    # navigates to each prog url and scrapes prog names, then appends each to name list
    for aTag in aTags:

        href = aTag.get('href')
        next_url = urljoin(base_url, href)
        s = requests.get(next_url)
        s_soup = bs(s.content, 'html.parser')

        h5Elements = s_soup.find_all("h5")

        for h5 in h5Elements:
            name_list.append(h5.text.strip())
            

    prog_rows = t_body.find_all("tr")

    # scrapes prog depts and appends each to dept list
    for row in prog_rows:
        dept_list.append(row.contents[5].text)

    # merges the two lists into one list of tuples
    plist = merge(name_list, dept_list)


    return plist



def main():

    plist = scrape_progs()

    # inserts list of tuples into db using function from plo_db
    insert_progs(plist)



if __name__ == '__main__':
    main()

