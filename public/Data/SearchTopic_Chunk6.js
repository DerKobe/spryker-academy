define({"411":{i:0.00141673608151628,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_extend_db_schema.html",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},"412":{i:0.00192289540162176,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_extend_spryker.html",a:"To extend the Spryker-Core functionality and to use the Spryker Engine to develop a project, it’s important to understand the folder structure used in Spryker. The project consists of two parts : Spryker-Core and project implementation. They both follow the same structure and the project ...",t:"Tutorial - Extending Spryker"},"413":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_internationalization.html",a:"Challenge When running international business it is important to fine tune the behavior of a shop depending on the country. Topics that differ: Design \u0026 Layout Currency \u0026 price Tax calculation Languages Expense calculation Available Stocks from a different ERP/client Availability of shipment methods ...",t:"Tutorial - Internationalization"},"414":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_new_relic_monitoring.html",a:"Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that helps you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next you will need to install the New Relic PHP ...",t:"Tutorial - New Relic Monitoring"},"415":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_optimizing_search_boosting.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show you how to optimize the search results you get by configuring boosts. Why use boost? The search engine is one of the most important and critical ...",t:"Tutorial - Optimizing Search Results with Boosting"},"416":{i:0.00107179979857243,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_search_.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show how to implement a simple product search using Spryker. This tutorial will not cover all aspects in detail to keep it focused. There will be links ...",t:"Tutorial - Search"},"417":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_search_custom_setup.html",a:"There might be instances when you need to go beyond product search or you have very specific requirements regarding search. You’re not tied to the basic mapping that ships with Spryker. You can easily roll your own and set up custom analyzer very easily. The underlaying library that gets used by ...",t:"Tutorial - Search Custom Setup"},"418":{i:0.00125021904766528,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_transfer_data_yves_zed.html",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"419":{i:0.000937890024078385,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_twig_extensions.html",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the module you’re ...",t:"Tutorial - Twig Extensions"},"420":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_using_translations.html",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},"421":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_working_filter_facets.html",a:"A search engine is one of the most important functionalities in an online shops because it facilitates a better navigation, allowing the user to get to the products that are in his interest. The search engine should return a small number of items that match the query. Facets provide aggregated data ...",t:"Tutorial - Working with Filter Facets"},"422":{i:0.00582826403753616,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_working_forms.html",a:"Spryker uses Symfony forms; this tutorial will help you get started on working with forms. You will build a simple newsletter subscription form that contains a field for entering the email address and a submit button. Follow the steps described below to create the newsletter subscription form: ...",t:"Tutorial - Working with Forms"},"423":{i:0.00510505517485469,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_working_tables.html",a:"Spryker has a dedicated component to help you build tables for the Zed UI. This tutorial will help you get started on working with tables. Creating a New Table Configure the Table Prepare the Data Render the Table Creating a New Table To get started defining the new table, create a new class in your ...",t:"Tutorial - Working with Tables"},"424":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_yves_bootstrap.html",a:"Yves and Zed are both built upon the  Silex micro-framework . So most concepts about modern web frameworks apply here as well. In static/public/Yves/index.php you will find the entry for the front-end application. \u003c?php\n$errorHandlerEnvironment = new ...",t:"Tutorial - Yves Bootstrapping"},"425":{i:0.00109931436188229,u:"../enablement/tutorials_and_howtos/howtos/how_tos.html",a:"HowTos are simple instructions to guide you through the process of performing a single task.  Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  ...",t:"HowTos"},"426":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/ht_implement_dd.html",a:"This article describes the steps how to implement direct debit payment method without integrating with a third party payment service provider.\n For this example, we will add a new module called PaymentMethods.\n\n If it is your the first time creating a new module, check  Tutorial - Adding a New ...",t:"HowTo - Implement Direct Debit Payment"},"427":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_fe_implementation.html",a:"Create a form\n In Yves, we start by building the form.  Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"Direct Debit Front-end Implementation"},"428":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_checkout_implementation.html",a:"The next step is to integrate direct debit into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the direct debit form and handler into the Checkout module: Click to expand the code sample \u003c?php\n\nnamespace ...",t:"Integrate Direct Debit into Checkout"},"429":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_be_implementation.html",a:"\nPersist payment details\nThe payment details for the direct debit payment method need to be persisted in the database. We’ll define a new table to store this data; inside the Persistence/Propel/Schema/ folder in Zed add the spy_directdebit_schema.xml file with the following content: \u003c?xml ...",t:"Direct Debit Back-End Implementation"},"430":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_shared_implementation.html",a:"\nAs you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define these constants.\n ...",t:"Direct Debit Shared Implementation"},"431":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_test_implementation.html",a:"Testing the Direct Debit Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"Testing the Direct Debit Implementation"},"432":{i:0.000997946959051736,u:"../enablement/tutorials_and_howtos/howtos/ht_add_new_shipment_method.html",a:"\nThis article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method, without the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method"},"433":{i:0.00109244246113785,u:"../enablement/tutorials_and_howtos/howtos/ht_add_new_shipment_method_2.html",a:"\nThis article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method, without the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method 2.0"},"434":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/ht_cart.html",a:"This article describes how to add product variants and product pictures to an existing cart Prerequisites: Before starting make sure you are familiar with the concept of Spryker  Super Attributes .  UI changes: Cart now supports changing the items in the cart by modifying their attributes. If we ...",t:"HowTo - Cart Integration"},"435":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/ht_create_personalized_prices.html",a:"Personalized Prices This article describes the steps that you need to consider when you need to implement personalized prices for customer groups.\n \nOverview\n When implementing special prices that are according to the group the customer is part of, several steps need to be considered.\n Extend ...",t:"HowTo - Create Personalized Prices"},"436":{i:0.000994953771343705,u:"../enablement/tutorials_and_howtos/howtos/ht_data_import.html",a:"The following article describes with a real life example for importing product images how to build your own DataImport for a specific type. The Database Schema You should start by looking at the database tables you want to fill with data. The image below shows the table relation for product images. ...",t:"HowTo - Add a New DataImport Type"},"437":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/ht_extend_inuse_core.html",a:"This topic describes how to extend a core module that is used by another core module.\n\n Extra consideration must be taken when extending core modules that are already in use by another module. In the following example we will extend the Cart  -\u003e Calculation modules.\n\n Step 1: Modify the Interface ...",t:"HowTo - Extend a Core Module That is Used by Another"},"438":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/ht_force_https.html",a:"The following article describes how you can force to use HTTPS in your pages. Load balancer If your servers are behind a load balancer and the load balancer is doing the redirects from HTTP to HTTPS, you don\u0027t need to further configure the application.\n         Application Configuration Force HTTPS ...",t:"HowTo - Force HTTPS"},"439":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_implement_invoice_payment.html",a:"Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment"},"440":{i:0.00112200773604399,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe.html",a:"Creating the form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Invoice Payment Front End"},"441":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_checkout.html",a:"The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the invoice form and handler into the Checkout module:\n Click here to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Invoice Payment into Checkout"},"442":{i:0.00112200773604399,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_be.html",a:"Checkout plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Add the following 2 plugins in Zed, under the Communication/Plugin/Checkout/ folder of the new added module.\n\n ...",t:"HowTo - Implement Invoice Payment Back End"},"443":{i:0.00112200773604399,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe_be_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Invoice Payment - Shared Implementation"},"444":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_test.html",a:"HowTo - Implement Invoice Payment - Test When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"HowTo - Implement Invoice Payment - Test"},"445":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_implement_prepayment.html",a:"Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment"},"446":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_fe.html",a:"Creating the form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End"},"447":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_checkout.html",a:"The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Prepayment into Checkout"},"448":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_be.html",a:"To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End"},"449":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared"},"450":{i:0.000874291012557587,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_test.html",a:"HowTo - Test Prepayment Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation"},"451":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/ht_product_data_import_frontend.html",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Importing Products to the SQL Database\n Products are imported in the SQL database through the Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"452":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/ht_mvp_project_structuring.html",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"453":{i:0.00510505517485469,u:"../enablement/tutorials_and_howtos/howtos/ht_replace_bundle_dependancies.html",a:"Spryker Dependencies This content describes how to identify module dependencies and replace a dependent module with another one. Each Spryker module might have several dependent modules that provide communication, utilities and added functionality. Usually adjustments are done via our plugin ...",t:"HowTo - Replace Spryker Module Dependencies"},"454":{i:0.000851733913482545,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_spryker_with_mysql.html",a:"Spryker supports MySQL database and for installing it with this database, follow these instructions to adjust the configuration. MySQL Version Currently Spryker works only with MySQL version 5.7 or higher.  Adjusting Spryker to Run with MySQL \n    For running the Spryker Demoshop with MySQL, it is ...",t:"HowTo - Setup Spryker with MySQL"},"455":{i:0.00335631758150851,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_stores_multi_store_projects.html",a:"For the case in which you must support multiple stores in your application, this can be achieved through configuration.\n\nYou can setup the stores together with their settings such as date format or currency and also you can setup the default store for your application.\n\n Configure Stores\n The stores ...",t:"HowTo - Setup Multi-Store Projects"},"456":{i:0.000765801998765848,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_stores_multiple_locals.html",a:"Multiple Locales This article describes the steps that you need to consider when you have to setup stores with multiple locales.\n Configure Locales for Store\n The stores configuration can be found in the config/Shared/stores.php file. You can find out more about store configuration  here .\n\n For ...",t:"HowTo - Setup Stores with Multiple Locales"},"457":{i:0.00145581964749242,u:"../enablement/store_administration_guide/store_administration_guide.html",a:"The  features list  will give you an overview of what the Spryker Commerce OS offers and prospective extensions that you can add in your development process. Next, user manuals for the back-office application (Zed) are offered. The manuals include all bundles that are available to configure, namely ...",t:"Store Administration"},"458":{i:0.000765801998765848,u:"../enablement/store_administration_guide/bg_sales.html",a:"Sales Orders can be managed by the shop owner from the back-office application (Zed). In this document we’ll describe the functionality offered by the Sales module that will help you manage the orders submitted in your shop. The Order Management System strongly correlates with the state machines you ...",t:"Sales"},"459":{i:0.00613618335994874,u:"../enablement/store_administration_guide/bg_customer.html",a:"Customer data can be managed either by the shop owner from the back-office application (Zed) or by the customer from the shop interface (Yves). When managing customer data from the back-office application, you can add personal information like name and email address, as well as customer billing and ...",t:"Customer"},"460":{i:0.00160084658678405,u:"../enablement/store_administration_guide/bg_category.html",a:"A product category is a way to organize the products in your shop by the type of products you sell. The product categories can be created and update using the dedicated section in the back-office user interface. Category assigning A product can be assigned to one or more product categories. Next, we ...",t:"Category"},"461":{i:0.000920483475074473,u:"../enablement/store_administration_guide/cms/bg_cms.html",a:"In ZED Admin UI there is a dedicated section that enables you to create pages, blocks, as well as configure URL redirects. Both pages and blocks use Twig templates that must be already created. To find out more on how to use the Content Management System, please follow the following sections: ...",t:"CMS"},"462":{i:0.00117047604208418,u:"../enablement/store_administration_guide/cms/cms_pages/cms_pages.html",a:"CMS - Pages In Pages section you can create new CMS pages, publish, view, edit them as well as manage all their changes with the versioning functionality.",t:"CMS - Pages"},"463":{i:0.00327349164085785,u:"../enablement/store_administration_guide/cms/cms_pages/cms_creating_new_page.html",a:"To demonstrate how to add a new page in Yves using the CMS, we will create a page with contact information in the demo shop. Adding a Template For the New ‘Contact Us’ Page Create a new Twig template under the src/Pyz/Yves/Cms/Theme/demoshop/template/ folder. We’ll call it contact_page.twig and it ...",t:"CMS - Creating a New Page"},"464":{i:0.0031500298156375,u:"../enablement/store_administration_guide/cms/cms_pages/cms_url_redirects.html",a:" CMS - URL Redirects URL redirects can be configured from the CMS interface. You must specify the URL you need to redirect, the new URL and the status code which plays a major role for search engines.   See also: CMS - Creating a New Page CMS - Preview Draft Page CMS Block CMS Glossary  CMS ...",t:" CMS - URL Redirects"},"465":{i:0.00333256803081572,u:"../enablement/store_administration_guide/cms/cms_pages/cms_versions.html",a:"With CMS versioning, you can manage all changes for a CMS page.  You can compare CMS versions, rollback or discard changes to a page.  To view versioning for a CMS page, click Version History from the top of the page. Rollback to CMS Version By selecting previous CMS versions, you will be able to ...",t:"CMS Versioning"},"466":{i:0.00399020664596002,u:"../enablement/store_administration_guide/cms/cms_blocks/cms_block.html",a:"How to Use Blocks \n        Blocks can be viewed as partial content snippets that can be embedded in other pages. From an SEO perspective\n        blocks are a real advantage.         \n        The CMS Block module supports flexible extension by adding a new connector.  Spryker provides two extensions\n ...",t:"CMS Block"},"467":{i:0.00246165826059486,u:"../enablement/store_administration_guide/cms/cms_blocks/cms_block_category_connector.html",a:"Category Blocks Category blocks are blocks that can be embedded into the category template, for which we can specify on which specific categories we want them to be rendered.\n\t\t For example, we have a Christmas sale that affects the categories  related to toys and sweets. We want to apply the ...",t:"CMS Block Category Connector"},"468":{i:0.00246165826059486,u:"../enablement/store_administration_guide/cms/cms_blocks/cms_block_product_connector.html",a:"Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with composer: \n\t\t\t\"spryker/cms-block-product-connector\": \"^1.0.0\" ...",t:"CMS Block Product Connector"},"469":{i:0.000765801998765848,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector.html",a:"\n            The Customer User Connector feature allows to connect a customer to 1 Zed user.\n         This feature is supported by 2 modules: CustomerUserConnector module:\n                Defines database schema requirements and CustomerTransferUsernameExpanderPlugin plugin to populate customer\u0027s ...",t:"Customer User Connector"},"470":{i:0.00109126904014106,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector_feature_integration.html",a:"Prerequisites To prepare your project to work with Customer User Connector: Require the Customer User Connector modules in your composer by running\n                 composer require spryker/customer-user-connector composer require spryker/customer-user-connector-gui \n                Install the ...",t:"Feature Integration - Customer User Connector"},"471":{i:0.00109126904014106,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector_under_the_hood.html",a:"Under the Hood - Customer User Connector Database Schema A new field (fk_user) is added to spy_customer to make it possible to connect a customer to 1 Zed user.   Last review date: Sep. 22, 2017 ",t:"Under the Hood - Customer User Connector"},"472":{i:0.00160084658678405,u:"../enablement/store_administration_guide/bg_glossary.html",a:"The translations can be handled from the back-office application from the Glossary section. A glossary consists of a glossary key (which is used in the templates contained in the shop application) a glossary value for each locale defined in the shop. Example: \t\tNext, we will help you create this ...",t:"Glossary"},"473":{i:0.00211258283617956,u:"../enablement/store_administration_guide/discounts/bg_discounts.html",a:"In Spryker, there are two types of discounts that can be defined : Vouchers To redeem this type of discount, the customer must enter a voucher code. Similar to cart rules discount, the discount is applied only if the linked decision rules are satisfied and if it’s active and valid. Cart Rules This ...",t:"Discounts"},"474":{i:0.00121472894457042,u:"../enablement/store_administration_guide/discounts/bg_discounts_creating_voucher.html",a:"The creation of a voucher consists of 4 steps: Define the general information (e.g. name, validity period) Define the rules and items on which the discount should be applied Define when to apply the discount Generate the voucher codes that can be used by the customers to redeem the discount Create ...",t:"Creating a Discount Voucher"},"475":{i:0.00121472894457042,u:"../enablement/store_administration_guide/discounts/bg_discounts_creating_cart_rule.html",a:"A cart rule is a discount that is contained in the cart and needs no input from the customer. If the discount is active, valid and the cart satisfies the linked conditions, then it’s automatically calculated for the order. Creating a Cart Rule The steps for creating a cart rule are similar to the ...",t:"Creating a Cart Rule Discount"},"476":{i:0.00211258283617956,u:"../enablement/store_administration_guide/discounts/bg_discounts_2_0.html",a:"The latest version is  Discounts In Spryker, there are two types of discounts that can be defined : Cart Rules This discount is contained in the cart and doesn’t need any action to be performed by the customer. This discount is automatically applied if the decision rules attached to it are being ...",t:"Discounts 2.0"},});