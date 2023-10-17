import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';

export default function NotFound() {

  const url = window.location.href
  let descTxt = <>
      <p>
      <Translate
        id="theme.NotFound.p2"
        description="The 2nd paragraph of the 404 page">
        Please contact the owner of the site that linked you to the
        original URL and let them know their link is broken.
      </Translate>
    </p>
  </>

  if(!url.includes("ego4d") && !url.includes("egoexo") && url.includes("/docs/")) {
    const gotoUrl = url.replace("/docs/", "/docs/ego4d/")
    const displayGotoUrl = "/docs/" + gotoUrl.split("/docs/")[1]
    descTxt = (<>
      <p>
        This might be an old link. Attempting to redirect to: <a href={gotoUrl}>{displayGotoUrl}</a>... Click the link if this does not happen automatically.
      </p>
      <p>
        <Redirect to={displayGotoUrl}/>
      </p>
    </>)
  }


  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  Page Not Found
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  We could not find what you were looking for.
                </Translate>
              </p>
              {descTxt}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
