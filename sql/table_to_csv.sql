SELECT `bug_id`,  `creation_time`,  `summary`,  `last_change_time`,  `summary_words_count`,  `platform`,  `op_sys`,  `priority`,  `depends`,  `blocks`,  `component`
FROM bug
INTO OUTFILE '/tmp/bugs_v1.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'

