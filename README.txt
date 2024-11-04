

======DOCKDER AND POSTGRES DB =======



1- docker-compose up
2- docker-compose exec postgres bash   
3- CREATE DATABASE carshowroomdb;                                          
4- psql -U admin -h localhost -d carshowroomdb
5- Enter (To make sure DB created ): \dt 

Example: 
               List of relations
 Schema |         Name          | Type  | Owner 
--------+-----------------------+-------+-------
 public | car                   | table | admin
 public | flyway_schema_history | table | admin
 public | showroom              | table | admin
(3 rows)




=====. SPRING BOOT ===========
6- RUN SPRING BOOT


=======ANGULAGR TS ========
7- npm install 
8- ng serve
