from mysql.connector import MySQLConnection, Error
from pymysql_dbconfig import read_db_config



def insert_progs(plist):

    # query to insert data from argument
    query = "INSERT INTO programs(prog_name, prog_dept) " \
            "VALUES(%s,%s)"
  
    try:
        print("Connecting to database...")

        # creates connection to db from config.ini
        config = read_db_config()
        conn = MySQLConnection(**config)

        # confirms connection
        if conn.is_connected():
            print("Connection established.")
        else:
            print("Connection failed.")

        # creates cursor object and executes/commits db inserts
        cursor = conn.cursor()
        cursor.executemany(query, plist)
        conn.commit()

        print("Insertions made.")

    except Error as error:
        print(error)

    finally:
        cursor.close()
        conn.close()
        print("Connection closed.")


