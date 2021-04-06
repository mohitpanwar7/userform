import psycopg2

def connectionconf():
    connectionconf = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="postgres",
        user="postgres",
        password="admin",
    )

    return connectionconf
