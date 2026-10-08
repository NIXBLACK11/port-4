Improve how ready https://nixblack.com is for agents.

Current Is Agentic score: 70/100 (Is Agentic readiness model based on Ora audit evidence).

Implement the following fixes in priority order (failures first, then warnings):

1. Agent-friendly 404s (Essential, Partial)
Evidence: The nonexistent path https://nixblack.com/__ora-404-probe-l3c8adh1 correctly returns HTTP 404. Partial credit: no Markdown error body was detected.
Recommended fix: Keep the correct HTTP 404 status. The remaining requirement is a Markdown error body when agents request Accept: text/markdown. Include at least 20 characters explaining the error and a link to your docs, sitemap, or llms.txt. Verify with `curl -sS -L -i -H 'Accept: text/markdown' https://yourdomain.com/some-path-that-does-not-exist`. Check both the final 404 status and the Markdown body with Content-Type: text/markdown. Checking the status alone does not verify the missing requirement.
Current result: Partial (50%).

2. Markdown content negotiation (acceptmarkdown.com) (Essential, Failed)
Evidence: Homepage https://nixblack.com does not meet the Markdown negotiation requirements: Accept: text/markdown returned text/html; charset=utf-8; Vary header missing Accept (got "rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch")
Recommended fix: Enable Markdown negotiation on the scanned homepage. Supporting it only on `/docs` or a separate .md URL does not satisfy this check. Requests with Accept: text/markdown must receive a nonempty Markdown body with Content-Type: text/markdown and Vary: Accept. Keep serving HTML for Accept: text/html. Adding Vary alone does not create a Markdown response. Verify both with `curl -sS -L -i -H 'Accept: text/markdown' https://yourdomain.com/` and `curl -sS -L -i -H 'Accept: text/html' https://yourdomain.com/`. Check the final response headers and body: Markdown with Vary: Accept for the first request, HTML for the second.
Current result: Failed.

3. JSON-LD structured data (Recommended, Failed)
Evidence: No JSON-LD structured data found on homepage
Recommended fix: Add JSON-LD structured data to your homepage using the identity type that matches your site - SoftwareApplication for products, Organization or LocalBusiness for companies, Person for personal sites, Article for blogs - with name, description, url, and type-appropriate fields (offers, sameAs, author) so AI can parse your identity programmatically.
Current result: Failed.

4. Agent instruction / when-to-use (Recommended, Failed)
Evidence: No agent instruction file with when-to-use guidance found
Recommended fix: Tell agents when to reach for you: add a 'when to use this' section to your llms.txt (or a dedicated agent-instructions file) that names your best-fit use cases and how an agent should call you. Be specific about the jobs you are right for - generic marketing copy does not read as guidance.
Current result: Failed.

5. Sitemap exists (Recommended, Failed)
Evidence: No sitemap found
Recommended fix: Add a valid XML sitemap at `/sitemap.xml` listing all indexable URLs. Include lastmod dates and keep it under 50MB.
Current result: Failed.

Requirements:
- Inspect the existing codebase before changing files.
- Follow each published protocol or file format exactly.
- Preserve existing product behavior and visual design.
- Add or update tests for every behavior you change.
- Verify every public endpoint and machine-readable file after implementation.
- Finish with a concise change summary, verification results, and any remaining recommendations that require product decisions or credentials.