SELECT *
FROM bug
INTO OUTFILE '~/tmp/bugs.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'