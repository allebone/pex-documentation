/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from "react";
import Seo from "@theme/Seo";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import useThemeContext from "@theme/hooks/useThemeContext";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Layout from "@theme/Layout";
import {
  CardActionArea,
  Grid,
  Card,
  CardHeader,
  Link,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Container,
  AvatarGroup,
  Tooltip,
  IconButton,
  Collapse,
} from "@mui/material";
import clsx from "clsx";

// import {} from "@mui/material"
const PREFIX = "blogListPage";

const classes = {
  error_text: `${PREFIX}-error_text`,
  card: `${PREFIX}-card`,
  default_color: `${PREFIX}-default_color`,
  link: `${PREFIX}-link`,
  hr: `${PREFIX}-hr`,
  container: `${PREFIX}-container`,
  font_primary: `${PREFIX}-font_primary`,
  pointer: `${PREFIX}-pointer`,
  avatar: `${PREFIX}-avatar`,
  grouped: `${PREFIX}-grouped`,
  grouped_first: `${PREFIX}-grouped_first`,
  padding: `${PREFIX}-padding`,
  abstract_div: `${PREFIX}-abstract_div`,
  faded: `${PREFIX}-faded`,
  row_gradient: `${PREFIX}-row_gradient`,
  text_gradient: `${PREFIX}-text_gradient`,
};

function BlogListPage(props) {
  const { items, sidebar } = props;
  const { isDarkTheme } = useThemeContext();
  const [new_items, set_items] = useState(items);
  // console.log(new_items);

  const StyledBox = styled(Box)(({ theme }) => {
    return {
      padding: "24px 0 16px 0",

      [`& .${classes.container}`]: {
        maxWidth: 1400,
      },
      [`& .${classes.faded}`]: {
        boxShadow: isDarkTheme
          ? "0 -10px 10px rgba(62,62,62,1)"
          : "0 -10px 10px rgba(216,216,216,.1)",
      },
      [`& .${classes.abstract_div}`]: {
        display: "flex",
        zIndex: 0,
      },
      [`& .${classes.row_gradient}`]: {
        boxShadow: "inset 0px -30px 20px -30px white",
        pointerEvents: "none",
        zIndex: 9999,
      },

      // [`& .${classes.text_gradient}`]: {
      //   background: isDarkTheme
      //     ? "linear-gradient(to bottom, transparent, rgba(62,62,62,1))"
      //     : "linear-gradient(to bottom, transparent, rgba(216,216,216,1))",
      //     WebkitBackgroundClip: "text ",
      // },

      [`& .${classes.padding}`]: {
        padding: 16,
      },
      [`& .${classes.grouped}`]: {
        marginLeft: -16,
      },
      [`& .${classes.grouped_first}`]: {
        marginLeft: 8,
      },
      [`& .${classes.avatar}`]: {
        border: "2px solid white",

        "&:hover": {
          borderColor: "#25c2a0",
        },
      },
      [`& .${classes.pointer}`]: {
        cursor: "pointer",
      },
      [`& .${classes.font_primary}`]: {
        color: isDarkTheme ? "white" : "#272627",
      },
      [`& .${classes.card}`]: {
        color: "#25c2a0",
        backgroundColor: isDarkTheme
          ? "rgba(62,62,62,1)"
          : "rgba(216,216,216,1)",
        "& .MuiCardHeader-subheader": {
          color: isDarkTheme ? "#88888899" : "#4c4c4c",
        },
      },
      [`& .${classes.default_color}`]: {
        color: "#25c2a0",
      },
      [`& .${classes.link}`]: {
        textDecoration: "none",
      },
      [`& .${classes.hr}`]: {
        borderColor: "#484848",
        margin: "12px 0 12px 0",
      },
    };
  });

  // console.log(props);
  return (
    <StyledBox>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          {props.metadata.allTagsPath && (
            <>
              <Grid item>
                <Typography variant="h4">
                  Posts Containing the{" "}
                  <span className={classes.default_color}>
                    {props.metadata.name}
                  </span>{" "}
                  Tag
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Link
                  variant="default"
                  component={Button}
                  href={props.metadata.allTagsPath}
                  className={clsx(classes.link, classes.default_color)}
                >
                  View All Tags
                </Link>
              </Grid>
            </>
          )}
          {new_items.length > 0 &&
            new_items.map((item, i) => {
              const Item = item.content;
              const { assets, contentTitle, frontMatter, metadata } =
                item.content;
              const { slug, status, tags, title } = frontMatter;
              const { authors } = metadata;
              return (
                <Grid item xs={12} lg={6} key={`${metadata.source}-${i}`}>
                  <Card elevation={4} className={classes.card}>
                    {/* <CardContent>
                    <BlogPostItem
                      frontMatter={frontMatter}
                      assets={assets}
                      metadata={metadata}
                    >
                      <Item />
                    </BlogPostItem>
                  </CardContent> */}
                    <Link
                      component={CardActionArea}
                      href={metadata.permalink}
                      className={clsx(classes.default_color, classes.link)}
                    >
                      <CardHeader
                        title={`${title}`}
                        subheader={`${
                          frontMatter.status ? `(${frontMatter.status})` : ""
                        } ${new Date(metadata.date).toDateString()}`}
                        className="blogPostTitle_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostItem-styles-module"
                      />
                    </Link>
                    {/* <Link
                      component={CardActionArea}
                      href={metadata?.authors[0]?.url}
                      target="_blank"
                      className={clsx(classes.default_color, classes.link)}
                    > */}

                    {/* </Link> */}
                    <CardContent className={classes.font_primary}>
                      <hr className={classes.hr} />
                      <Grid
                        container
                        spacing={2}
                        flexWrap="nowrap"
                        sx={{
                          height: 100,
                          boxSizing: "border-box",
                          // marginTop: 0,
                          marginTop: "16px",
                        }}
                      >
                        <Grid item>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            sx={{ marginRight: "16px" }}
                          >
                            Abstract:
                          </Typography>
                        </Grid>
                        <Grid item sx={{ overflowY: "auto" }}>
                          <Typography
                            variant="body1"
                            className={classes.text_gradient}
                          >
                            {frontMatter?.abstract}
                          </Typography>
                        </Grid>
                      </Grid>

                      <hr className={classes.hr} />
                    </CardContent>
                    <CardContent
                      sx={{ paddingTop: 0 }}
                      // subheader={metadata.authors[0].title}
                    >
                      <Grid container alignItems="center" spaing={2}>
                        <Grid item>
                          <Typography
                            className={classes.font_primary}
                            variant="body1"
                            fontWeight="bold"
                          >
                            Authors:
                          </Typography>
                        </Grid>
                        <Grid item>
                          {authors.length > 1 ? (
                            <AvatarGroup max={4}>
                              {authors.map((author, n) => {
                                return (
                                  <Tooltip
                                    title={`${author.name} - ${author.title}`}
                                    key={author.name}
                                    arrow
                                  >
                                    <Link
                                      component={IconButton}
                                      href={author?.url}
                                      target="_blank"
                                      className={clsx(
                                        n > 0
                                          ? classes.grouped
                                          : classes.grouped_first
                                      )}
                                    >
                                      <Avatar
                                        alt={author.name}
                                        className={clsx(
                                          classes.pointer,
                                          classes.avatar
                                        )}
                                        fallback={author.name[0]}
                                        src={
                                          assets?.authorsImageUrls[n] ||
                                          undefined
                                        }
                                      />
                                    </Link>
                                  </Tooltip>
                                );
                              })}
                            </AvatarGroup>
                          ) : (
                            <Tooltip
                              title={`${authors[0].name} - ${authors[0].title}`}
                              arrow
                            >
                              <Link
                                component={IconButton}
                                href={authors[0]?.url}
                                target="_blank"
                              >
                                <Avatar
                                  alt={authors[0].name}
                                  fallback={authors[0].name[0]}
                                  className={clsx(
                                    classes.pointer,
                                    classes.avatar
                                  )}
                                  src={assets?.authorsImageUrls[0] || undefined}
                                />
                              </Link>
                            </Tooltip>
                          )}
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions className={classes.padding}>
                      <Grid
                        container
                        spacing={2}
                        flexWrap="nowrap"
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography
                            variant="body1"
                            className={classes.font_primary}
                            fontWeight="bold"
                          >
                            Tags:
                          </Typography>
                        </Grid>
                        <Grid item container spacing={1} flexWrap="nowrap">
                          {metadata.tags.length > 0 &&
                            metadata.tags.map((tag, j) => {
                              return (
                                <Grid item key={`${tag}-${j}`}>
                                  <Button
                                    key={tag.label}
                                    component={Link}
                                    href={tag.permalink}
                                    size="small"
                                    variant="outlined"
                                    color="inherit"
                                    className={classes.default_color}
                                  >
                                    {tag.label}
                                  </Button>
                                </Grid>
                              );
                            })}
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </StyledBox>
  );
}

const LayoutWrapper = (props) => {
  return (
    <Layout>
      <BlogListPage {...props} />
    </Layout>
  );
};
export default LayoutWrapper;
