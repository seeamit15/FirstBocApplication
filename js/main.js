/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Example of Require.js boostrap javascript
 */
requirejs.config({
    // Path mappings for the logical module names
    paths:
            //injector:mainReleasePaths
                    {
                        'knockout': 'libs/knockout/knockout-3.4.0',
                        'jquery': 'libs/jquery/jquery-2.1.3.min',
                        'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
                        'promise': 'libs/es6-promise/promise-1.0.0.min',
                        'hammerjs': 'libs/hammer/hammer-2.0.4.min',
                        'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
                        'ojs': 'libs/oj/v2.0.2/debug',
                        'ojL10n': 'libs/oj/v2.0.2/ojL10n',
                        'ojtranslations': 'libs/oj/v2.0.2/resources',
                        'signals': 'libs/js-signals/signals.min',
                        'text': 'libs/require/text'
                    }
            //endinjector
            ,
            // Shim configurations for modules that do not expose AMD
            shim: {
                'jquery': {
                    exports: ['jQuery', '$']
                }
            },
            // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
            // resources with a custom translation file.
            // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
            // a path that is relative to the location of this main.js file.
            config: {
                ojL10n: {
                    merge: {
                        //'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
                    }
                }
            }
        });

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojrouter',
    'ojs/ojmodule', 'ojs/ojoffcanvas', 'ojs/ojinputnumber', 'ojs/ojselectcombobox', 'ojs/ojcheckboxset',
    'ojs/ojslider', 'ojs/ojswitch',
    'ojs/ojdatetimepicker', 'ojs/ojinputtext', 'ojs/ojradioset', 'ojs/ojnavigationlist', 'ojs/ojarraytabledatasource', 'ojs/ojchart'],
        function (oj, ko, $)
        {

            function EmpDetail(data) {
                this.fName = data.fName;
                this.lName = data.lName;
                this.genderEmp = data.genderEmp;
                this.ageEmp = data.ageEmp;
                this.salEmp = data.salEmp;
                this.addLine1Emp = data.addLine1Emp;
                this.addLine2Emp = data.addLine2Emp;
                this.cityEmp = data.cityEmp;
                this.stateEmp = data.stateEmp;
                this.emailEmp = data.emailEmp;
                this.isSubscribeEmp = data.isSubscribeEmp;
            
            }

            function StateModel()
            {
                var self = this;
                self.isRequired = ko.observable(true);
                self.employees = ko.observableArray([]);
                self.firstName = ko.observable();
                self.lastName = ko.observable();                                        
                self.gender = ko.observable("Male");
                self.ageValue = ko.observable(1);
                self.min = ko.observable(1);
                self.max = ko.observable(120);
                self.salary = ko.observableArray(["sal0"]);
                self.addLine1 = ko.observable();
                self.addLine2 = ko.observable();
                self.city = ko.observable();
                self.state = ko.observable();
                self.email = ko.observable();
                self.isSubscribe = ko.observable("YES");             

                // For charts
                // Pie-chart
                self.maleCount = ko.observable(0);
                self.femaleCount = ko.observable(0);
                self.pieSeriesValue = ko.observableArray([]);

                // Donut-chart
                self.sal0Count = ko.observable(0);
                self.sal8Count = ko.observable(0);
                self.sal15Count = ko.observable(0);
                self.sal30Count = ko.observable(0);
                self.salAboveCount = ko.observable(0);
                self.innerRadius = ko.observable(0.5);
                self.centerLabel = ko.observable('Annual Income');
                self.labelStyle = ko.observable('font-size:20px;color:#999999;');
                self.donutSeriesValue = ko.observableArray([]);
                self.donutGroupsValue = ko.observableArray([]);

                // Bar-chart
                self.age1Count = ko.observable(0);
                self.age2Count = ko.observable(0);
                self.age3Count = ko.observable(0);
                self.age4Count = ko.observable(0);
                self.age5Count = ko.observable(0);
                self.barSeriesValue = ko.observableArray([]);
                self.barGroupsValue = ko.observableArray([]);

                self.addTask = function () {
                    
                    // validation
                    var x, y, z, p, q;

                    x = document.getElementById("firstName").value;
                    y = document.getElementById("lastName").value;
                    z = document.getElementById("addLine1").value;
                    p = document.getElementById("city").value;
                    q = document.getElementById("state").value;

                    if ( x.length == 0 ) { 
                        alert('First Name should not be empty...');                      
                        document.getElementById("firstName").focus();
                        return false;
                    }
                    if ( y.length == 0 ) { 
                        alert('Last Name should not be empty...');                      
                        document.getElementById("lastName").focus();
                        return false;
                    } 
                    if ( z.length == 0 ) { 
                        alert('Address Line 1 should not be empty...');                      
                        document.getElementById("addLine1").focus();
                        return false;
                    } 
                    if ( p.length == 0 ) { 
                        alert('City should not be empty...');                      
                        document.getElementById("city").focus();
                        return false;
                    } 
                    if ( q.length == 0 ) { 
                        alert('State should not be empty...');                      
                        document.getElementById("state").focus();
                        return false;
                    } 
                    
                     var empData = {fName: self.firstName(), lName: self.lastName(), genderEmp: self.gender(),
                    ageEmp: self.ageValue(), salEmp: self.salary(), addLine1Emp: self.addLine1(), addLine2Emp: self.addLine2(),
                    cityEmp: self.city(), stateEmp: self.state(), emailEmp: self.email(), isSubscribeEmp: self.isSubscribe()};
                
                    self.employees.push(new EmpDetail(empData));

                    // Pie-Chart
                    if (self.gender() === 'Male') {
                        self.maleCount(self.maleCount() + 1);
                    } else {
                        self.femaleCount(self.femaleCount() + 1);
                    }
                    var pieSeries = [{name: "Male", items: [self.maleCount()]},
                        {name: "Female", items: [self.femaleCount()]}];
                    self.pieSeriesValue(pieSeries);

                    // Donut-Chart
                    if (self.salary() == 'sal0') {
                        self.sal0Count(self.sal0Count() + 1);
                    } else if (self.salary() == 'sal8') {
                        self.sal8Count(self.sal8Count() + 1);
                    } else if (self.salary() == 'sal15') {
                        self.sal15Count(self.sal15Count() + 1);
                    } else if (self.salary() == 'sal30') {
                        self.sal30Count(self.sal30Count() + 1);
                    } else {
                        self.salAboveCount(self.salAboveCount() + 1);
                    }
                    var donutSeries = [{name: "0 - 3 lakhs = sal0 ", items: [self.sal0Count()]},
                        {name: "3 - 8 lakhs =  sal8", items: [self.sal8Count()]},
                        {name: "8 - 15 lakhs = sal15", items: [self.sal15Count()]},
                        {name: "15 - 30 lakhs = sal30", items: [self.sal30Count()]},
                        {name: "Above 30 lakhs = salAbove", items: [self.salAboveCount()]}];
                    var donutGroups = ["Group A"];
                    self.donutSeriesValue(donutSeries);
                    self.donutGroupsValue(donutGroups);

                    //Bar-Chart
                    if (self.ageValue() >= 1 && self.ageValue() < 11) {
                        self.age1Count(self.age1Count() + 1);
                    } else if (self.ageValue() >= 11 && self.ageValue() < 21) {
                        self.age2Count(self.age2Count() + 1);
                    } else if (self.ageValue() >= 21 && self.ageValue() < 41) {
                        self.age3Count(self.age3Count() + 1);
                    } else if (self.ageValue() >= 41 && self.ageValue() < 61) {
                        self.age4Count(self.age4Count() + 1);
                    } else {
                        self.age5Count(self.age5Count() + 1);
                    }
                    var colorHandler = new oj.ColorAttributeGroupHandler();
                    var barSeries = [{name: "", items: [{x: "0-10", y: [self.age1Count()], color: colorHandler.getValue(0)},
                                {x: "10-20", y: [self.age2Count()], color: colorHandler.getValue(1)},
                                {x: "20-40", y: [self.age3Count()], color: colorHandler.getValue(2)},
                                {x: "40-60", y: [self.age4Count()], color: colorHandler.getValue(3)},
                                {x: "Above 60", y: [self.age5Count()], color: colorHandler.getValue(4)}]}];
                    var barGroups = ["0-10", "10-20", "20-40", "40-60", "Above 60"];
                    self.barSeriesValue(barSeries);
                    self.barGroupsValue(barGroups);
                    
                    self.firstName("");
                    self.lastName("");
                    self.gender("Male");
                    self.ageValue(1);
                    self.salary(["sal0"]);
                    self.addLine1("");
                    self.addLine2("");
                    self.city("");
                    self.state("");
                    self.email("");
                    self.isSubscribe("YES");

                };
            }
            $(document).ready(
                    function ()
                    {
                        ko.applyBindings(new StateModel(),
                                document.getElementById('globalBody'));
                    }
            );
        });


