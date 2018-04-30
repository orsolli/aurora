webpackJsonp([0x7b1de73fdf78],{461:function(e,o){e.exports={data:{markdownRemark:{html:'<h2 id="how-we-deploy"><a href="#how-we-deploy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How we deploy</h2>\n<p>A deploy starts in the AuroraAPI, triggered from one of the user facing clients (<a href="/aurora/documentation/openshift/#ao">AO</a> and <a href="/aurora/documentation/openshift/#aurora-console">AuroraConsole</a>), or automatically from the build pipeline. The API extracts and merges relevant parts of the specified AuroraConfig in order to create an AuroraDeploymentSpec for the application being deployed.</p>\n<p>From the AuroraDeploymentSpec we provision resources in our existing infrastructure and generate OpenShift objects that are applied to the cluster. The application is then rolled out either via importing a new image or triggering a new deploy. The deploy result is saved for later inspection.</p>',headings:[{value:"How we deploy",depth:2}],fields:{slug:"/frontpage/deploy/"},frontmatter:{title:""}}},pathContext:{slug:"/frontpage/deploy/"}}}});
//# sourceMappingURL=path---frontpage-deploy-3603b20a103515db0fd3.js.map