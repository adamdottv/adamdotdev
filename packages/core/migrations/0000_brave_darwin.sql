CREATE TABLE IF NOT EXISTS "spotify" (
	"id" varchar(20) PRIMARY KEY NOT NULL,
	"time_created" timestamp (3) DEFAULT now() NOT NULL,
	"time_updated" timestamp (3) DEFAULT now() NOT NULL,
	"time_deleted" timestamp (3),
	"playing" boolean,
	"shuffle" boolean,
	"repeat" text,
	"title" text,
	"artist" text,
	"artwork" text,
	"progress" integer,
	"volume" integer
);
