setwd("C:/nexus/data-gh/census/src/data")
library(tidyverse)
library("sf")

sb.map.2010 <- read_sf("tl_2010_06083_bg10/tl_2010_06083_bg10.shp")

sb.2010 <- sb.map.2010 %>%
  filter(ALAND10 > 0) # %>%
  # filter(GEOID10=="060830001032")

plot(st_geometry(sb.2010), col = sf.colors(12, categorical = TRUE))

cbg.map.2020 <- read_sf("tl_2020_06_bg/tl_2020_06_bg.shp")

sb.2020 <- cbg.map.2020 %>%
  filter(COUNTYFP == "083") %>%
  filter(ALAND > 0)# %>%
#  filter(GEOID=="060830001032")

plot(st_geometry(sb.2020), col = sf.colors(12, categorical = TRUE))

iv.2020 <- sb.2020 %>%
  filter(TRACTCE %in% (c(
    #"002934",
    "002935",
    "002933",
    "002937",
    "002936",
    "002926",
    "002924",
    #"980000",
    "980300"
  ))) %>%
  filter(!(GEOID == "060830029331"))


plot(st_geometry(iv.2020), col = sf.colors(12, categorical = TRUE))



iv.2020 %>%
  st_write("iv2020.shp")

sb.2010 %>%
  as_tibble() %>%
  select(GEOID=GEOID10,ALAND=ALAND10)

bind_rows(
  sb.2020 %>%
    as_tibble() %>%
    mutate(which="2020") %>%
    select(GEOID, ALAND=ALAND, which),
  sb.2010 %>%
    as_tibble() %>%
    mutate(which="2010") %>%
    select(GEOID=GEOID10,ALAND=ALAND10, which)
) %>%
  spread(which, ALAND) %>%
  mutate(diff = `2020` - `2010`)
