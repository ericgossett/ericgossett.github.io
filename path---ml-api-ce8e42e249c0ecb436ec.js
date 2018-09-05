webpackJsonp([94766615434379],{362:function(a,n){a.exports={data:{markdownRemark:{html:'<p>Using computational methods such as  density functional theory (DTF) to calculate the properties of materials is both computationally expensive and time consuming. For large systems, calculations can take weeks to months to complete and require access to high performance hardware. As a result, machine learning has gained considerable traction as a solution to alleviate these issues. </p>\n<p>In materials science machine learning is in a favorable position due to the wealth of information available. For the past decade high-throughput frameworks such as AFLOW, yielded large databases contain millions of unique structures with their computed properties. Therefore, a number of models have emerged in the past few years. </p>\n<p align="center">\n\n  <a class="gatsby-resp-image-link" href="/static/plmf-diagram-d2fefdcf9d5090ac2a4197f83989ed1b-2837e.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 58.31533477321814%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHtaqCD/8QAGBAAAgMAAAAAAAAAAAAAAAAAAEECEBH/2gAIAQEAAQUCjohV/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFRABAQAAAAAAAAAAAAAAAAAAICH/2gAIAQEABj8Cq//EABwQAAICAgMAAAAAAAAAAAAAAAABEVEQIUFhcf/aAAgBAQABPyGGdemLyJVBwKx//9oADAMBAAIAAwAAABDb7//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EFf/xAAZEAEBAQEBAQAAAAAAAAAAAAABACExEUH/2gAIAQEAAT8QBFo8NOv2DiMHAljs0cW//9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="plmf diagram" title="" src="/static/plmf-diagram-d2fefdcf9d5090ac2a4197f83989ed1b-f8fb9.jpg" srcset="/static/plmf-diagram-d2fefdcf9d5090ac2a4197f83989ed1b-e8976.jpg 148w,\n/static/plmf-diagram-d2fefdcf9d5090ac2a4197f83989ed1b-63df2.jpg 295w,\n/static/plmf-diagram-d2fefdcf9d5090ac2a4197f83989ed1b-f8fb9.jpg 590w,\n/static/plmf-diagram-d2fefdcf9d5090ac2a4197f83989ed1b-85e3d.jpg 885w,\n/static/plmf-diagram-d2fefdcf9d5090ac2a4197f83989ed1b-2837e.jpg 926w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n</p>\n<p>In particular, our group and collaborators have developed models of our own using the AFLOW database as a training set. The first model known as <em>property-labeled materials fragments</em> (plmf) represents a crystal structure as a colored periodic graph. Graphs are constructed by determining the topological neighbors using a Voronoi tessellation. The nodes of the graph are then decorated using a set of reference properties of the atomic species located at this vertex. Edges of the graph are also decorated by taking the difference between the reference properties for the two neighboring atoms. Finally, the graph is partitioned into smaller subgraphs, known as fragments, which act as the feature vectors for the model. This model was trained using Gradient Boosting Decision Trees and is able to predict the following properties: band gap, band gap type, bulk and shear moduli, Debye temperature, heat capacities at constant pressure or volume, thermal conductivity and thermal expansion.</p>\n<p>the second model, known as the <em>molar fraction descriptor</em> (mfd) predicts vibrational properties of a material based on the chemical composition alone. This model was trained using nonlinear support vector machines with a radial basis function kernel. It is able to predict the vibrational free energy, heat capacity, and vibrational entropy.</p>\n<h2>The problem</h2>\n<p>While our group developed two models capable of accurate predictions, machine learning discipline is still reasonably new within the realm of materials science. As a result, the average user lacks the expertise to effectively utilize machine learning codebases. Therefore, our goal was to create an accessible means to integrate machine learning frameworks into a materials discovery workflow.</p>\n<p>To do so, I developed the AFLOW-ML API, which provides the community a web accessible interface that distils functionality down to its essence: from user input, return a prediction. This way, our machine learning models are widely accessible and unburdens the user from having to understand the intricacies of machine learning or struggle installing and setting up existing codebases. </p>\n<h2>Design</h2>\n<p align="center">\n    \n  <a class="gatsby-resp-image-link" href="/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-660e1.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 50.54387237128354%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHq1olCi//EABkQAAIDAQAAAAAAAAAAAAAAAAECAxETIP/aAAgBAQABBQKMqEatOP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAQAABwAAAAAAAAAAAAAAAAEAAhEgMTJB/9oACAEBAAY/AlCbPYNq2//EABwQAAICAgMAAAAAAAAAAAAAAAABESEQYTFBUf/aAAgBAQABPyGEklsXrVFeCjY+Dt4//9oADAMBAAIAAwAAABCMz//EABYRAQEBAAAAAAAAAAAAAAAAABEBEP/aAAgBAwEBPxAgZ//EABYRAQEBAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxAW1c//xAAbEAACAwADAAAAAAAAAAAAAAABEQAhMRBBgf/aAAgBAQABPxADHcAGzje0MMbsQEB6U0jOhzj/2Q==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="aflow ml design" title="" src="/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-f8fb9.jpg" srcset="/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-e8976.jpg 148w,\n/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-63df2.jpg 295w,\n/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-f8fb9.jpg 590w,\n/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-85e3d.jpg 885w,\n/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-d1924.jpg 1180w,\n/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-9452e.jpg 1770w,\n/static/aflow-ml-design-375f97d1e1875309e89255f6bf987239-660e1.jpg 2758w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n</p>\n<p>When designing the API I wanted to keep things are simple as possible. In early iterations, I considered only having a single endpoint, where different actions would affect the response. However, it quickly became apparent that this was not ideal for a number of reasons. </p>\n<p>The biggest issue was that depending on the size of the structure, getting the prediction from one of the models could take a great deal of time. Therefore, it goes without saying that having the logic to fetch the prediction sit within the code for the route would be terrible. The solution was to employ a task queue in order to run the predictions asynchronously. </p>\n<p>The code for the models where written in Python, so the stack I chose to use was Flask (web app framework), Celery (distributed task queue) and Redis (as the broker for Celery). Due to predictions now being handled as async task, the API consisted of two routes:</p>\n<ul>\n<li>{model}/prediction</li>\n<li>prediction/result/{id}</li>\n</ul>\n<p>API usage involves uploading a material structure to a POST endpoint, {model}/prediction, and retrieving a prediction object from a GET endpoint, /prediction/result/{id}.\nWith the first endpoint users would specify the model via the url (plmf or mfd) and POST the contents of a POSCAR file e.g.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">curl</span> http://aflow.org/API/aflow-ml/v1.0/plmf/prediction--data-urlencode file@test.poscar</code></pre>\n      </div>\n<p>When a structure is posted, the prediction is added to the task queue. The endpoint then responds with the following json response:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n <span class="token string">"id"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"model"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"results_endpoint"</span><span class="token punctuation">:</span> String\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The keyword id is the task id for the prediction. It is used to fetch the results of the prediction once the job has completed. Fetching results is handled by the second endpoint e.g:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">curl</span> http://aflow.org/API/aflow-ml/v1.0/prediction/result/<span class="token punctuation">{</span>id<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>If the task has not completed the endpoint responds with a task object:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n <span class="token string">"status"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"description"</span><span class="token punctuation">:</span> String\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Depending on the status, one can decide wherever or not to poll this endpoint. When the status is set to \'SUCCESS\' the results of the prediction will be appended to the response:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// plmf model</span>\n<span class="token punctuation">{</span>\n <span class="token string">"status"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"description"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"model"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"citation"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"ml_egap_type"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"ml_egap"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_energy_per_atom"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_ael_bulk_modulus_vrh"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_ael_shear_modulus_vrh"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_agl_debye"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_agl_heat_capacity_Cp_300K"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_agl_heat_capacity_Cv_300K"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_agl_heat_capacity_Cp_300K_per_atom"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_agl_heat_capacity_Cv_300K_per_atom"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_agl_thermal_conductivity_300K"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_agl_thermal_expansion_300K"</span><span class="token punctuation">:</span> Number\n<span class="token punctuation">}</span>\n\n<span class="token comment">// mfd model</span>\n<span class="token punctuation">{</span>\n <span class="token string">"status"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"description"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"model"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"citation"</span><span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n <span class="token string">"ml_Cv"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_Fvib"</span><span class="token punctuation">:</span> Number<span class="token punctuation">,</span>\n <span class="token string">"ml_Svib"</span><span class="token punctuation">:</span> Number\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Python Client</h2>\n<p>While the API may be accessed using any HTTP library Requests (Python), URLSession (iOS SDK), HttpURLConnection (Java), axios (JavaScript), etc, we wanted to make using our API as simple as possible. As a result, we created a Python client for the AFLOW-ML API available for download (<a href="http://aflow.org/src/aflow-ml/">here</a>). Using the client is very straightforward: one simply opens a poscar file, creates an instance of the  <code class="language-text">AFLOWmlAPI()</code> object and call the method <code class="language-text">get_prediction(file_str, model_name)</code>, which returns the prediction as a dictionary.\nAn example is shown below:</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> aflowml<span class="token punctuation">.</span>client <span class="token keyword">import</span> AFLOWmlAPI\n\n<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">\'your.poscar\'</span><span class="token punctuation">,</span> <span class="token string">\'r\'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> input_file<span class="token punctuation">:</span>\n    aflowML <span class="token operator">=</span> AFLOWmlAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    data <span class="token operator">=</span> aflowML<span class="token punctuation">.</span>get_prediction<span class="token punctuation">(</span>\n        input_file<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string">\'plmf\'</span>\n    <span class="token punctuation">)</span></code></pre>\n      </div>\n<h2>CLI</h2>\n<p>Finally, to streamline use even more, when the Python client is installed, it also installs a command line interface (CLI). The CLI exposes all the functionality of the Python client and is targeted at users who are not familiar with Python or using REST APIs. For a list of all its arguments please refer to the publication (<a href="https://www.sciencedirect.com/science/article/pii/S0927025618302349?via%3Dihub">here</a>). However, to illustrate its simplicity, a prediction can be retrieved using following command:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">aflow-ml your.poscar --model<span class="token operator">=</span>plmf</code></pre>\n      </div>\n<h2>Deploying</h2>\n<p>To deploy I decided to go with the typical pattern I\'ve done for other Python web apps (Django, Flask) e.g using NGINX for a reverse proxy and Gunicorn as the WSGI HTTP server to serve the actual app. For the first iteration I did everything system side and while this is straightforward for someone with experience, it may prove a challenge for those unfamiliar. Considering the person who inherits this project after me may not have the same skill set, I wanted to make sure deploying was painless. </p>\n<p>As a result I decided to give Docker a go, as for everyone was talking about it, and up until this point I didn\'t have a chance to test it in a production environment. To my surprise "dockerizing" the app was very easy and from this project I\'ve created a simple boilerplate for dockerizing a Flask + Celery + Redis + MongoDB + NGINX + Gunicorn app (<a href="https://github.com/ericgossett/flask-docker-boilerplate">here</a>).</p>',frontmatter:{date:"June 28, 2018",path:"/ml-api",title:"Materials ML API",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHbWyg8gP/EABkQAAMBAQEAAAAAAAAAAAAAAAABAhEQE//aAAgBAQABBQKqwVvlTp5iWL//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAYEAACAwAAAAAAAAAAAAAAAAAAIQEQEf/aAAgBAQAGPwIduTD/xAAbEAADAAMBAQAAAAAAAAAAAAAAAREhMUFhsf/aAAgBAQABPyG3khZIz6LRXa9aE2PoKWnD/9oADAMBAAIAAwAAABB0D//EABYRAAMAAAAAAAAAAAAAAAAAABARIf/aAAgBAwEBPxCIf//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/EKf/xAAdEAEAAgICAwAAAAAAAAAAAAABETEAIUFxUWGx/9oACAEBAAE/EEigJIrz1ijdRoSPWOSzOryiSQJaPdXmoRA4WnyFXOUjCKD5rP/Z",aspectRatio:1.238210399032648,src:"/static/api-bc36ef40b0a729eb832bc42c4b240772-f2ac0.jpg",srcSet:"/static/api-bc36ef40b0a729eb832bc42c4b240772-567e3.jpg 158w,\n/static/api-bc36ef40b0a729eb832bc42c4b240772-c3206.jpg 315w,\n/static/api-bc36ef40b0a729eb832bc42c4b240772-f2ac0.jpg 630w,\n/static/api-bc36ef40b0a729eb832bc42c4b240772-0c4a5.jpg 945w,\n/static/api-bc36ef40b0a729eb832bc42c4b240772-952fc.jpg 1024w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---ml-api-ce8e42e249c0ecb436ec.js.map