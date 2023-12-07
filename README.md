# SLO Manager

SLO manager is a web application for viewing and managing Student Learning Objectives and SLO Discussions for the programs and courses available at Butte College. 

## Installation

### Download and run Python 3.11

for 64-bit install download and run <a href="https://www.python.org/ftp/python/3.11.0/python-3.11.0-amd64.exe">This file</a>
for 32-bit install <a href="https://www.python.org/ftp/python/3.11.0/python-3.11.0.exe">This file</a>

### Database

You will need a database for your data<a href="https://dev.mysql.com/downloads/installer/">example</a>

<a href="https://github.com/NAW4545/Scraper-Repository/blob/main/sequelize.js"> Adjust these 
Here is part of sequelize.js
const sequelize = new Sequelize({
  host: 'csci36db.clmdetk42d9h.us-east-1.rds.amazonaws.com', this
  database: 'PLO',
  username: 'generic',  
  password: 'password',  
  port: '3306',
  dialect: 'mysql',
  to your databases requirements</a>

<a href="https://github.com/NAW4545/Scraper-Repository/blob/main/Scraper.zip">Adjust these 
[mysql]
host = localhost
port = 3306
database = test
user = Admin
password = password
to your databases requirements</a>

### Required Files

download <a href="https://github.com/NAW4545/Scraper-Repository/tree/main/scraper_and_instert_test">This file</a> 

install dependencies from <a href="https://github.com/NAW4545/Scraper-Repository/blob/main/package.json">This file</a>/and<a href="https://github.com/NAW4545/Scraper-Repository/blob/main/package-lock.json">This file</a>


### Other

visit our repository <a href="https://github.com/NAW4545/Scraper-Repository">Here</a>

To use the files please visit our <a href="#" target="blank">User guide</a>. #needs userguide link

## Usage

Usage
As the SLO Manager is only designed for use at Butte College, the user base and application for the software is narrow.

User Base
The user base will consist mainly of department chairs and the PLO Coordinator.

Expected Output
SLO Manager should scrape SLO and PLO data from the Butte College Website and store it in the MySQL database with metadata for name, department, program, and semester. Should store discussions in the database with metadata for data, departments, and programs discussed. SLO Manager should show which PLOs must be evaluated each semester, grouped by department. 

Test Plans
After completion of the installation guide above, all the <a href="https://github.com/NAW4545/Scraper-Repository/documentation/test-plans">test plans</a> in the <a href="https://github.com/NAW4545/Scraper-Repository/documentation">documentation</a> folder should pass.


## Authors and acknowledgment
This project was created by students in CSCI-36 at Butte College:

Joshua Dahl, Zach Humason, Brody Steele & Noah Welch

Inspired by "Guitar Shop" project for web development 2 created by Luke Sathrum for Butte College. 

## Contributing

As this is a collaborative project for college credits, we cannot accept outside collaborations at this time. 

## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

## Requirements Progress:

- Store the discussions the faculty have
![Static Badge](https://img.shields.io/badge/Complete-green)
- Store when each PLO needs to be evaluated (based on previous evaluation, a department submitted plan, and the 6 year timeline)
![Static Badge](https://img.shields.io/badge/Complete-green)
- Output a list of PLOs that need to be evaluated each semester total, by department.
![Static Badge](https://img.shields.io/badge/Complete-green)
- Track a changed PLO 
![Static Badge](https://img.shields.io/badge/Complete-green)
- Mark PLO evaluated based on the discussion from above
![Static Badge](https://img.shields.io/badge/In--Progress-red)
- Output all discussions of a PLO based on all, date, department, program
![Static Badge](https://img.shields.io/badge/Complete-green)
- Track SLO's for each course
![Static Badge](https://img.shields.io/badge/Complete-green)
- Track faculty submissions for SLOs
![Static Badge](https://img.shields.io/badge/In--Progress-red)
- Create a use-able website for all of this
![Static Badge](https://img.shields.io/badge/Complete-green)
- Create an accessible website
![Static Badge](https://img.shields.io/badge/Complete-green)