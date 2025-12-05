-- export_audit_info_req_in_rango.sql
SET MARKUP CSV ON DELIMITER , QUOTE OFF
SET FEEDBACK OFF
SET PAGESIZE 0
SET LINESIZE 32767
SET TRIMSPOOL ON
SET TERMOUT OFF

ACCEPT start_day PROMPT 'Fecha inicial (YYYY-MM-DD): '
ACCEPT end_day   PROMPT 'Fecha final   (YYYY-MM-DD): '

SPOOL audit_info_req_in_&&start_day._&&end_day..csv

WITH ranked AS (
  SELECT
         transactionid,
         messageid,
         systemid,
         componentid,
         timestamp_info,
         audit_info,
         ROW_NUMBER() OVER (
           PARTITION BY transactionid
           ORDER BY timestamp_info DESC, messageid DESC
         ) AS rn
  FROM   au_esb.esb_audit
  WHERE  componentid LIKE '%REQ.IN'
    AND  transactionid IS NOT NULL
    AND  date_info >= TO_DATE('&&start_day','YYYY-MM-DD')
    AND  date_info <  TO_DATE('&&end_day','YYYY-MM-DD') + 1
)
SELECT
       transactionid,
       messageid,
       systemid,
       componentid,
       TO_CHAR(timestamp_info,'YYYY-MM-DD"T"HH24:MI:SS.FF3') AS timestamp_info,
       REGEXP_REPLACE(DBMS_LOB.SUBSTR(audit_info, 32700,      1), '[[:cntrl:]]', ' ') AS audit_info_seg1,
       REGEXP_REPLACE(DBMS_LOB.SUBSTR(audit_info, 32700,  32701), '[[:cntrl:]]', ' ') AS audit_info_seg2,
       REGEXP_REPLACE(DBMS_LOB.SUBSTR(audit_info, 32700,  65401), '[[:cntrl:]]', ' ') AS audit_info_seg3
FROM   ranked
WHERE  rn = 1
ORDER  BY transactionid;

SPOOL OFF
SET MARKUP CSV OFF