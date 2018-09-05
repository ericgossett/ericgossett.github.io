webpackJsonp([65453555881757],{355:function(a,n){a.exports={data:{markdownRemark:{html:'<p>In materials science it is important predict the phase stability for a system.\nThe realization of stable phases identifies which structures are best for\nsynthesis, thus accelerating the discovery of novel materials. To preform this\nanalysis particular type of visualization known as a phase diagram are created.\nIn general, a phase diagram is constructed by plotting the formation enthapies vs.\ncomposition for each structure and calculating the convex hull --\nthe set of most extreme or "outside" points. </p>\n<p>In this project, I was tasked with developing a web application to visualize the\nphase diagrams for binary and ternary systems within the AFLOW database. The\nAFLOW database contains over 1.8 million structures spanning over 90 different\natomic species. This results in 4,819 binary hulls and 92,274 ternary hulls,\neach of which containing 200-1000 structures. Furthermore, depending on\nthe system size, this requires two different types of visualizations. For the\nbinary case, the phase diagram is 2D, with the convex hull being a path connecting\nthe "outside" points. While for ternary systems, the phase diagram is plotted\non a 3D triangular grid, where the convex hull becomes a complex multi-faced\nplane. </p>\n<h2>Backend</h2>\n<p>The objective of the back end is very straight forward: store the phase diagrams and\nsend it to the frontend. Therefore, I used Flask and MongoDB to create a simple\nREST API consisting of three endpoints:</p>\n<ul>\n<li><strong>hulls/{system}</strong> : Fetches a hull for a given system.</li>\n<li><strong>entry/{auid}</strong>: Fetches the material entry info for a given AUID (AFLOW unique identifer).</li>\n<li><strong>availability/{selection}</strong>: Gets the availability and reliability for the selected elements. This endpoint is used during searches to highlight, color and grey out elements of the periodic table depending on which system.</li>\n</ul>\n<h2>Frontend</h2>\n<p>Unlike the back end, the frontend was much more involved. Not only did it require\ntwo different visualizations, but it required the following features:</p>\n<ul>\n<li>Interactive visualizations with the option to select points, change axis (binary) and adjust the camera (ternary).</li>\n<li>The option to download the PDF report for a particular phase diagram.</li>\n<li>A component to view the information of any selected points.</li>\n<li>A component in which users may compare multiple phase diagrams. </li>\n<li>The ability to see selected points highlighted across all selected hulls. </li>\n<li>Routing, such that users can share a link for a particular phase diagram.</li>\n<li>An interactive periodic table to select the system. Depending on the selection, the elements in the table will grey out and change color depending on the reliability of that systems phase diagram.</li>\n</ul>\n<p>Given the set of features I\'ve chose to build the app using <strong>React</strong>, <strong>Redux</strong> and <strong>React Router</strong> while the visualizations where handled using <strong>D3.js</strong> for the binary phase diagrams and <strong>Three.js</strong> for the ternaries.  </p>\n<h3>Periodic table search</h3>\n<p align="center">\n    \n  <a class="gatsby-resp-image-link" href="/static/component_ptable-eb1e5e86340e17002f1453019dcc02e5-50ea6.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 71.89695550351288%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABnUlEQVQ4y51T0W7DIAzM//9jn7aHSVvXBDBgk8Q7myRt11WqFunkGPD5bMxAOevb+6eeTp96Pie1b1mWl7Guq9tSitZadRARba1pm4Emysxqa2b3/0cflm+w+9gb/CBUMtiZxTdszcifE8PKPRKRq3TCuSSdcwBZPQJjshKuRMUT9v1Ws7acVJIh4p80jKMSSDthTQgOWrhAaVd0viSlXA9VRFkrAu2/MtQgphQjDLpS0DiBEJV2QkZGTpphsxTH0ooSDtcctUpfF+wXIMKPDQmEUF3UtUZNYboSpohyUfKMA9kOwxISRCggKEnwbU0QOAOCvWZVuQUhzh0KraRpmrTS5L0xJal1BamVOxCSEYgbSray2RKjign9Gy8XzbtCv0U0vKGHROgNIGg6oeEBMJ83VNuzf7sUin4pvo4bNh5XaANZCi7AFG5BDci4xRgRkLq/Q9zSZre1bQKc8DuMeCUfmscvZTS3z1nTfehFHufuT7hCK1n2aces1bK1gI+hZv71Mp6A/aXY4JqibfpvX4Tc+K9iuHtet4r+SfoD2shEyhLd4x8AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="component ptable" title="" src="/static/component_ptable-eb1e5e86340e17002f1453019dcc02e5-fb8a0.png" srcset="/static/component_ptable-eb1e5e86340e17002f1453019dcc02e5-1a291.png 148w,\n/static/component_ptable-eb1e5e86340e17002f1453019dcc02e5-2bc4a.png 295w,\n/static/component_ptable-eb1e5e86340e17002f1453019dcc02e5-fb8a0.png 590w,\n/static/component_ptable-eb1e5e86340e17002f1453019dcc02e5-526de.png 885w,\n/static/component_ptable-eb1e5e86340e17002f1453019dcc02e5-fa2eb.png 1180w,\n/static/component_ptable-eb1e5e86340e17002f1453019dcc02e5-50ea6.png 1281w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n</p>\n<p>The search interface was designed to be a periodic table where users can construct their search query by clicking on the elements in the table or typing in the search box. As elements are added to the query the elements in the table would react. If a particular combination is not present in the database the element will appeared greyed out. Additionally, available elements will change color depending on the reliability of the phase diagram. This metric corresponds to the number of structures for the given system. Red signifies systems containing less than 100 entries, yellow for systems with 100-200 entries and green for systems with 300+. </p>\n<p>Each of the elements of the periodic table are instances of the component <Element />. To determine the state of each element, each time the query changed a request was sent to the <strong>availability/{selection}</strong> endpoint to fetch the following JSON response:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n  <span class="token string">"Pr"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"reliability"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token string">"availability"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"Ni"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"reliability"</span><span class="token punctuation">:</span> <span class="token number">289</span><span class="token punctuation">,</span>\n    <span class="token string">"availability"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"Ru"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"reliability"</span><span class="token punctuation">:</span> <span class="token number">227</span><span class="token punctuation">,</span>\n    <span class="token string">"availability"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"Y"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"reliability"</span><span class="token punctuation">:</span> <span class="token number">229</span><span class="token punctuation">,</span>\n    <span class="token string">"availability"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"W"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"reliability"</span><span class="token punctuation">:</span> <span class="token number">253</span><span class="token punctuation">,</span>\n    <span class="token string">"availability"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"Pt"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"reliability"</span><span class="token punctuation">:</span> <span class="token number">296</span><span class="token punctuation">,</span>\n    <span class="token string">"availability"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The values of reliability and availability where then passed as props to <Element /> in order to update the color accordingly.</p>\n<h3>Visualization</h3>\n<p align="center">\n    \n  <a class="gatsby-resp-image-link" href="/static/component_visualization_binary-d7478111660c00b7a5b639c4226464dd-50ea6.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 71.89695550351288%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACSElEQVQ4y32Tz2sTURDH85d4UArqP9CbiFWx4EWjYBRE8FTBRkSKIkgUKdWTB0E8KehBepCWqCXW4I9IC9q0YUlI06TaqG1a0LTZNNndvB9f573dJK/SuvBl5r3Z/bzZeTOhXHERUzM5JFMW0lYJgISUvoQQgUx/q9rvOY4D13URuvf4OeLJFB4+S+DijaewN+toeR5arZbxId8RaIoxhtDArRcYeTSN2IMUrt8fR10BCcY59zMlmJYUncy3k3o08KtVQPvJ5EuobtT0xyorIgFtq322dS0Nvw2cyeYN4AKqNRuSuRC1Zch6xZe9EthfJHN/OYitaihjHKHZXDdDa15laEN4DYhKBrIy62slTXYusGovsKsZf3/N0plr4Of0HNXMg+s5+GJl8Xt9A479B/JbEnLxLeTCK8jia1pP0joBufQBsvzJl/K1PupyMKp76NzVJxgamUT0zgSu3B1FrW7DJaCgbPj39xDFCcj5ccj8S8jcKPljkAVaF9/owwQdJn5O+0CVYSQax9BwHtFYFoO339Et25SxOs2/GO5ugtfXwKtL4FQGXk5BFOIQpQT4jynw9TL9LeteSm/4Gg5EYug9dRMnLg2j6TR1QEmopqWOUHfYkWpyAgjW6saE0TY9R8LoOXoSuw4ex6HzAwR0wagPNdBsbM6NBpfd6eH+Xge491gE+/vPYk/faRy+MEhAJwDyf8bv/zKAZ7CvP4LdfWECXtZAf/SYnhb1kml32lPDsi2w0XTgEVAFVYambTQaOtYeS7Ms7fVfguD+5rWj6cYAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="component visualization binary" title="" src="/static/component_visualization_binary-d7478111660c00b7a5b639c4226464dd-fb8a0.png" srcset="/static/component_visualization_binary-d7478111660c00b7a5b639c4226464dd-1a291.png 148w,\n/static/component_visualization_binary-d7478111660c00b7a5b639c4226464dd-2bc4a.png 295w,\n/static/component_visualization_binary-d7478111660c00b7a5b639c4226464dd-fb8a0.png 590w,\n/static/component_visualization_binary-d7478111660c00b7a5b639c4226464dd-526de.png 885w,\n/static/component_visualization_binary-d7478111660c00b7a5b639c4226464dd-fa2eb.png 1180w,\n/static/component_visualization_binary-d7478111660c00b7a5b639c4226464dd-50ea6.png 1281w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n</p>\n<p>When a binary system is selected, the app renders the phase diagram using <strong>D3.js</strong>. Points in the plot may be selected and the bounds of the y-axis may be adjusted. </p>\n<p align="center">\n    \n  <a class="gatsby-resp-image-link" href="/static/component_visualization_ternary-1cf68f7222cd099a736f1071aa3d54a1-50ea6.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 71.89695550351288%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB9ElEQVQ4y52Ty2sTURSH85e4UArVf6A7EWulBTcaBaMgBVcV2ohIUQSJCqW6ciGIdFFMi4qlhb7EWAtKxtiah2nMGJrUVBeC6cIHk8xMk9z5nJnW6eTRiP7gMHfOPXycex4eOfeJSExmMZwinloDDIQQ/2yapqHrOp7bD8aZXQxzbyzE+aujKMUilv4HWqlU8PRdf8Lw/bcE7oa5cmfaBCo20DAMGtXMtyMbGE2tOo5kZo3vP385QLdZUhQdTS3vem8DY+mMC5htCfyQzJHPf20NTMg7GaZWazN0f4uKSjD4itDLrOmrYrmbAqX4e8rlTfRNjXcr6aYZWkq8STIzGWFiKkfu80bTGBt49tIog8ML+G8+5+KtpyiloitY2Ocf3zZIvJgjNL9EcDzO1HwCxRwTN9QB+vyzDA5l8AfSDNxYMIHbXRZbsLKm80WaRJp7xMjIDGMPp3k28Rg5/Rphdd2gFtjhvcxBX4COk9c4fmGIkqo6A1IxS1FYiVKQJT4mlokuL5GRY+SzEdbXJQpKoabONrCty0vb0RPsOXSMw+f6UN1PEVWEGbSbqua91R0DF7C928eBnjPs6zxFV+9ADdAZZ/P51r8QW2tp1/bPFFBXw/bu0+zv8bG308uR3v5GoNF6Oxo2pR5YUjVnl+uH929mAX8DDnUAuc5sYFcAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="component visualization ternary" title="" src="/static/component_visualization_ternary-1cf68f7222cd099a736f1071aa3d54a1-fb8a0.png" srcset="/static/component_visualization_ternary-1cf68f7222cd099a736f1071aa3d54a1-1a291.png 148w,\n/static/component_visualization_ternary-1cf68f7222cd099a736f1071aa3d54a1-2bc4a.png 295w,\n/static/component_visualization_ternary-1cf68f7222cd099a736f1071aa3d54a1-fb8a0.png 590w,\n/static/component_visualization_ternary-1cf68f7222cd099a736f1071aa3d54a1-526de.png 885w,\n/static/component_visualization_ternary-1cf68f7222cd099a736f1071aa3d54a1-fa2eb.png 1180w,\n/static/component_visualization_ternary-1cf68f7222cd099a736f1071aa3d54a1-50ea6.png 1281w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n</p>\n<p>Ternary plots are rendered using <strong>Three.js</strong>. One may adjust the camera and also select points in the plot. </p>\n<h3>Structure info</h3>\n<p align="center">\n    \n  <a class="gatsby-resp-image-link" href="/static/component_entries-99388e5c57def3fa4f9e4650d6a911d8-50ea6.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 71.89695550351288%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB70lEQVQ4y51RXW8SQRTdX+6T8cVEH7Qx1pqKpdCKrdBijA810cSHviFtgeVDqIaGAMsuu+zXfB3vzILhxUKc5GTO3Nx75t5zrTRN4ExnuBs6iMIY/384hGCw7J6Lw3IfpY+3OD7vo3jWx36pi92CjVdHbbzI26he/MLF9yEOK30cVwnnP5H/0MNusU2wsafzDlpotB1YvYGHt+8byJ/coPz5Fkdnbbwu1vGuOqBPBnhTauHr5QjfLofIla4p3kH1yxDFShuFchcnn36jUOni4LSD3mAOC5DUrgDUalx6q2jJFWHdhjjLNYetxZNlXMFijCNYJJi5PjiXWCwi4nNwoRAEIcYTB2nKwZiA6wVYhBGkVJj7AcIoJt8UJlPHvDkXsFKdGG4yXMENBBxfQSllBKWShq+Dcw5r7IT40XRh9zw0Oy4ahGt7hnrTMag1ptA+JwlHQp3qon+BMdqyLnj88go7uQae51p4uneDh89qhDoe7VzhwZOa2SjnDCxNafz7YTzUPo1GYzDy0PN8w2kCk+C6HvkklgXMdHEfLCkFlKTFBH62O5YSD7KdxhEJutA5OlmLbhTUvkxcjihmf43VnRguMqFVh5vEjGCcMMx8ScXSFAq6pVxxYXj2yZaCekTBN5u9GnmTsKXH28bsbTv8A3eWJHTirHoHAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="component entries" title="" src="/static/component_entries-99388e5c57def3fa4f9e4650d6a911d8-fb8a0.png" srcset="/static/component_entries-99388e5c57def3fa4f9e4650d6a911d8-1a291.png 148w,\n/static/component_entries-99388e5c57def3fa4f9e4650d6a911d8-2bc4a.png 295w,\n/static/component_entries-99388e5c57def3fa4f9e4650d6a911d8-fb8a0.png 590w,\n/static/component_entries-99388e5c57def3fa4f9e4650d6a911d8-526de.png 885w,\n/static/component_entries-99388e5c57def3fa4f9e4650d6a911d8-fa2eb.png 1180w,\n/static/component_entries-99388e5c57def3fa4f9e4650d6a911d8-50ea6.png 1281w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n</p>\n<p>The app keeps track of all points selected. When one visits the entry component information about the selected structures are fetched from the AFLOW database and displayed as a list of cards.</p>\n<h3>Comparison</h3>\n<p align="center">\n    \n  <a class="gatsby-resp-image-link" href="/static/component_compare-fe50c06cb0ea7981fae84db0b18ad93e-50ea6.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 71.89695550351288%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACbklEQVQ4y21TaW/TQBD1//8IEv2ABEJF4kqrShS1VAgh9UoRbUFpQxInqVOSxknTHF6v7b38mF0bklJWep5jZ2bXs2+8RcTR9EP8qA3R+zVDzBUWkcCClSCdc4kkVYhiufSz+zG3kwhxnMCr+1O8qHTw9FULay+beLLewNp6Kcl+9LyO9x+vsLc/ILvh/P/C+h8/u8BlcwJPSAmpjINyMkcmNJQubAfSIxbTbVKQCan/A5srFTytFIqVu2/G7jC78e/5rEw4RzZuAdMmMKkXmAfAogfMOpQ4hzY5PEUF85wSCXQ4Zv4RePMTRJYWpayfArMsA+/XoIIDqMY2VO01dO0N9M8tqPYeDJ/Q7amgpII2wd5lMuih/3UL07MNDNvfoclpjHH7jH55OmcQ1JJUKDpAIIsjZJw53bbCXs7Lc43lkgRVQmJ1KZki12nZhnylHautMfDCcYyT8zGqZyOSt6g6jAudfIffQtRbd2i0pzgi3fosjks4+3zk9oYjBq97PcfmThcbOwGhVyJw2Ny9xtvtKxycDHB8GpLeube/jOuhst1FN5jBM5p6qJKV6+sVaZZelT5ow8NlLA+JY+EVdLAP3fkMTS+oW7tQpKvuF+hR3dGBE234qAMT3UBHIfRiSCB9GlDMJTSfER+NfWUNdhdCDC8g+6eQ11XCCeTgHGLcpOQhUccgTTOw/gVy/wNMYwvm8h1MvQLt71DsGYyI3QB4QgjMFwzEBsg/U5CXIFvnBRfjOKZp4VCTNpS/Vxx824ZMGOUUtHO0kTR6jJFTZARB4yP+6oKk1tpxMUkS99s22UKY4kBB42ZrGKNdwd9R5hk+O55IbgAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="component compare" title="" src="/static/component_compare-fe50c06cb0ea7981fae84db0b18ad93e-fb8a0.png" srcset="/static/component_compare-fe50c06cb0ea7981fae84db0b18ad93e-1a291.png 148w,\n/static/component_compare-fe50c06cb0ea7981fae84db0b18ad93e-2bc4a.png 295w,\n/static/component_compare-fe50c06cb0ea7981fae84db0b18ad93e-fb8a0.png 590w,\n/static/component_compare-fe50c06cb0ea7981fae84db0b18ad93e-526de.png 885w,\n/static/component_compare-fe50c06cb0ea7981fae84db0b18ad93e-fa2eb.png 1180w,\n/static/component_compare-fe50c06cb0ea7981fae84db0b18ad93e-50ea6.png 1281w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n</p>\n<p>Each selected phase diagram is saved by the application and listed in this component. This is useful because one may compare phase diagrams. In addition, any selected points will highlight across all stored phase diagrams. Finally, clicking the title of any phase diagram will reload it in the visualization component, while fetching the data from the local store.</p>',frontmatter:{date:"June 30, 2018",path:"/convex-hull",title:"Convex Hull App",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAAACXBIWXMAAAsSAAALEgHS3X78AAAEFklEQVRIx61Wa28cNRTdvwl8oFQqIBRVVP0ASCCFSAgVopQiJCSEEFDEQ6UoUUgoQYQ8UDavNs2rm81r349sd3Znd3Zm7LE9h2vPTrLbJDRBWDnra/v6+Izte51Eq+0jtdfAk12L0MDOfgO7B02kL4nUgY224yPxcOMp3hx8iKFPtjA4sonX31nByzcW8crNi+HKzSW8emMer73xB7b3mkjkS23c+zWHsakCRn8v4KfxLL4fzeCHsSwhYxC1z0MWP+r6l32Uqw4SUgr8X0WKAIkgCKBUCBWGUf0MdLHtFjod19hn+cTQXIYwJDL669Yn0IVzToQ2ETpmgi5n+6OfMHbsrTUZYwye65KzgO/7faQn5JF9irDXURO4pEqX0s4iihvTxu44DqSUZwo4V6HeT61KF+Z7sBY+x8H4IOzqoelz3c4FFOoB46HQqFXN57UcIlu7h9bU2yhNvof0byOwrSN4PkOrZf874XEn7dtRdp/2jqPyeALW9IdgCx/Dm/8A5QfvI/P3XfPZruddjFAphdzBPg5XJpGbGsbT6VvwkrfB5odgk9L8xCCya1MQ8gKHEtd2o4586jHsegW+lYNf2wUrPQLPJ9EsPoFVq5hL/FyFvYM+HYrreuCBgq9BAcXocF0/AOP9ZDGOCc+LkNOTVLcP50eKlHo11YOwC/UchKfmCB3LtXoHM8kyZpMVQlxfFmX8tVCG1XCRWFmvYeDdVQzd2cK1t5bxwsACXrp+cbx4PYkrA7O4eu0BNtONSOHcYhXzS1VSSquRPbd09AyqXRydgZqpZ5JV1LVCRflQSQbOHEKnuyeXKScHqHNrQghhoqJUrtJ1EJB0WvrSSq8JGXByojZzIbhPYzBtSUYEst0GCZLmlLk+ZU2oB4uFPAK3Ga3J2wiFh7BTRRi41HYMdJyHkkf3Rl8hJXuEdq+N0PeQGpVSEay2g7BdhLJzUO0SVG0TykpD1VNQzQPqz0S2nY3a2ods9EaKIaT4LZVK8DNzULkZiEOK1dwcxN44xP4EROo+ROZPiPQo9U1AFhYgc7OQ5Kfyc/0K4wzcti142/cR0ORgcRhiaQRi7QuI5dsQq59BrH8FsfEt4Rta4GeIre8QpMdowcnjr44UikhhpVI1aYk7dfiVbbDDGbD0ONj6XbBHX4InhxEkPyLcAl/+FMH612CVDUp3/nGIBvGhaMJisWSSgQ5jEYP2nZPB3RaYXQE/SoEXV2mv0whYdOq9cd9HWCgU6GXrQO9pwJlJtAa6LSQCuiKUdE5A8/QjJoU4rVAPZDJZOE7HPE76pdOIXz3eBaNngfOojsd7X8FjQo122zEK9YC2HdpPbTcazUglwbIs06cf/nhcE/d9sv7xaEWXEqp2FOLy/5qcytjxp2nEav4LNM8/AxFcQcYvYVgAAAAASUVORK5CYII=",aspectRatio:.6245694603903559,src:"/static/ahull-091d2c2a336c47268c01949e423c3a5a-10a2c.png",srcSet:"/static/ahull-091d2c2a336c47268c01949e423c3a5a-34d74.png 158w,\n/static/ahull-091d2c2a336c47268c01949e423c3a5a-a4cce.png 315w,\n/static/ahull-091d2c2a336c47268c01949e423c3a5a-10a2c.png 544w",sizes:"(max-width: 544px) 100vw, 544px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---convex-hull-9494fff19f0258e5566e.js.map