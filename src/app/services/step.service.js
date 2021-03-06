(function () {
    'use strict';

    angular
        .module('app.services')
        .service('stepService', stepService);

    function stepService(apiService, $q) {
        var steps = [
            {
                name: 'Our Commitment To You',
                sref: 'mindset.ourCommitment',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Your Commitment to Us',
                sref: 'mindset.yourCommitment',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    data: null
                }
            }, {
                name: 'Get the Businessmindset',
                sref: 'mindset.businessMindset',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Privilege and Responsibility',
                sref: 'mindset.privilegeAndResponsibility',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showDropdownBlock: false,
                    showNotice: false,
                    data: {
                        first: null,
                        second: null,
                        third: null,
                        fourth: null,
                        text: null,
                        businessName: null,
                        result: null
                    }
                }
            }, {
                name: 'Are You Stuck?',
                sref: 'mindset.areYourStuck',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    data: null
                }
            }, {
                name: 'Cashflow Capacity Catch 22',
                sref: 'mindset.cashFlow',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Your Business With / Without A Business',
                sref: 'mindset.yourBusiness',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Top Down, Bottom Up',
                sref: 'mindset.topDownBottomUp',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Start Business\'n!',
                sref: 'mindset.startBusinessn',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Your Business Start Date',
                sref: 'mindset.businessStartDate',
                model: {
                    data: {
                        year: null,
                        month: null
                    },
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showStartDate: false
                }
            },

            // Businessstatement

            {
                name: 'BUSINESSstatement Overview',
                sref: 'statement.overview',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Your BUSINESSstatement',
                sref: 'statement.yourStatement',
                model: {
                    data: {
                        first: '0',
                        second: '',
                        third: '0',
                        fourth: '',
                        fifth: '0'
                    },
                    fullName: null,
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showFormBlock: false
                }
            }, {
                name: 'BUSINESSstatement Q&A',
                sref: 'statement.qa',
                model: {
                    showInfoBlock: false,
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Commit To Your BUSINESSStatement',
                sref: 'statement.commitToYour',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false,
                    data: {},
                    businessName: null
                }
            }, {
                name: 'Step 1 BUSINESSsummary',
                sref: 'statement.step1Summary',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showFormBlock: false,
                    data: {
                        first: '0',
                        second: null,
                        third: '0',
                        fourth: null,
                        fifth: '0',
                        sixth: null,
                        businessName: null
                    }
                }
            },

            // Ideal client

            {
                name: 'Ideal Client Overview',
                sref: 'idealClient.overview',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Who Are Your Ideal Clients?',
                sref: 'idealClient.whoAreYouIdealClient',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showIdealClientTextBlock: false,
                    data: []
                }
            }, {
                name: 'Define Your Ideal Client',
                sref: 'idealClient.defineYourIdealClient',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Name Your Ideal Client',
                sref: 'idealClient.nameYourIdealClient',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showIdealClientNameBlock: false,
                    data: {
                        firstName: null
                    }
                }
            }, {
                name: 'Ideal Client Q&A',
                sref: 'idealClient.qa',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'BUSINESSstatement Re-Commitment',
                sref: 'idealClient.commitYourIdealClient',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            },
            // {
            //     name: 'Double Check',
            //     sref: 'idealClient.doubleCheck'
            // },
            // {
            //     name: 'BUSINESSstatement',
            //     sref: 'idealClient.businessStatement'
            // },
            {
                name: 'Step 2 BUSINESSsummary',
                sref: 'idealClient.step2Summary',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            },

            // 1 Year goal

            {
                name: '1 Year Goal Overview',
                sref: 'yearGoal.overview',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Personal Expenses',
                sref: 'yearGoal.personalExpenses',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Fixed Business Expenses',
                sref: 'yearGoal.fixedBusinessExpenses',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Total Fixed Expenses Revenue',
                sref: 'yearGoal.totalFixedExpensesRevenue',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Selling Price',
                sref: 'yearGoal.sellingPrice',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Variable Business Expenses',
                sref: 'yearGoal.variableBusinessExpenses',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Profit Margin',
                sref: 'yearGoal.profitMargin',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Revenue Breakdown',
                sref: 'yearGoal.revenueBreakdown',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Your 1 Year Goal',
                sref: 'yearGoal.yourYearGoal',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Adjust your 1 Year Goal',
                sref: 'yearGoal.adjustYourYearGoal',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: '1 Year Goal Q&A',
                sref: 'yearGoal.qa',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Commit To Your 1 Year Goal',
                sref: 'yearGoal.commitYourYearGoal',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Step 3 BUSINESSsummary',
                sref: 'yearGoal.step3Summary',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'First BUSINESSexpert Review',
                sref: 'yearGoal.firstExpertReview',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            },

            // Action plan

            {
                name: 'Action Plan Overview',
                sref: 'actionPlan.overview',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'The World Around You',
                sref: 'actionPlan.worldAroundYou',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Double Check Start Date',
                sref: 'actionPlan.doubleCheckStartDate',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'What\'s Happening in Q1-Q4',
                sref: 'actionPlan.whatsHappening',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Rate the 10 Connecting Strategies',
                sref: 'actionPlan.rateConnectingStrategies',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Choose Your Connecting Strategies',
                sref: 'actionPlan.chooseYourConnectingStrategies',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Connecting Strategy Strategizing',
                sref: 'actionPlan.connectingStrategyStrategizing',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Action Items',
                sref: 'actionPlan.actionItems',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Action Plan Review',
                sref: 'actionPlan.actionPlanReview',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Quarterly Goals',
                sref: 'actionPlan.quarterlyGoals',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Double Check 1 Year Goal',
                sref: 'actionPlan.doubleCheckYearGoal',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Action Plan Q&A',
                sref: 'actionPlan.qa',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Commit To Your Action Plan',
                sref: 'actionPlan.commitYourActionPlan',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Step 4 BUSINESSsummary',
                sref: 'actionPlan.step4Summary',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            }, {
                name: 'Second BUSINESSexpert Review',
                sref: 'actionPlan.secondExpertReview',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false,
                    showContent: false
                }
            },

            // Execute

            {
                name: 'Living BUSINESS Day-to-Day',
                sref: 'execute.livingDayToDay',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Commit to Yourself',
                sref: 'execute.commitYourSelf',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Set Yourself Up For Success',
                sref: 'execute.setYourselfUpForSuccess',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }, {
                name: 'Tour of BUSINESScenter - Execute',
                sref: 'execute.tourExecute',
                model: {
                    showVideoBlock: false,
                    showStaticTextBlock: false
                }
            }];

        var finishedSteps = [];


        // temporary crutch
        // _.forEach(steps, function (value, key) {
        //     finishedSteps.push(key);
        // });


        var activeStepIndex = null;
        var activeStep = null;
        var prevStep = null;
        var nextStep = null;
        var requestApi = false;
        var stepIndex = null;

        this.getActiveStep = getActiveStep;
        this.getNextAndPrevStep = getNextAndPrevStep;
        this.setFinishActiveStep = setFinishActiveStep;
        this.updateActiveModel = updateActiveModel;
        this.getAllSteps = getAllSteps;
        this.resolveActiveStep = resolveActiveStep;
        this.getLastFinished = getLastFinished;

        this.checkStepsIsFinishedSection = checkStepsIsFinishedSection;

        this.sendApiData = sendApiData;
        this.getApiData = getApiData;

        ///////////////////////////////

        function sendApiData(url, data) {
            return apiService.rest.all(url).post({
                data: data, finishedSteps: finishedSteps
            });
        }

        function getApiData(url) {
            return apiService
                .rest
                .one(url)
                .get();
        }

        function getLastFinished() {
            return $q(function (resolve) {
                if (finishedSteps.length <= 0) {
                    return resolve(steps[0]);
                } else {
                    var lastSteps = finishedSteps[finishedSteps.length - 1];
                    return resolve(steps[lastSteps]);
                }
            });
        }

        function resolveActiveStep(state) {

            return $q(function (resolve, reject) {
                return _initApiData()
                    .then(function () {
                        var step = getStateStep(state);
                        var prev = getPrevStep(stepIndex);
                        var next = getNextStep(stepIndex);

                        if (!prev) {
                            activeStep = step;
                            activeStepIndex = stepIndex;
                            prevStep = prev;
                            nextStep = next;
                            return resolve(activeStep);
                        }

                        if (prev && isFinished(stepIndex - 1)) {
                            activeStep = step;
                            activeStepIndex = stepIndex;
                            prevStep = prev;
                            nextStep = next;
                            return resolve(activeStep);
                        }

                        return resolve(null);
                    })
                    .catch(reject);
            });
        }

        function getStateStep(state) {
            return steps.find(function (step, index) {
                if (step.sref === state.self.name) {
                    stepIndex = index;

                    return true;
                }

                return false;
            })
        }

        function _initApiData() {
            var deferred = $q.defer();

            if (finishedSteps.length === 0 && !requestApi) {
                requestApi = !requestApi;
                return getFinishedStepsAPI()
                    .then(function (response) {
                        if (response.data) {
                            finishedSteps = response.data.steps.finishedSteps;
                            _setDataStepModel(response.data);
                        }
                    })
                    .catch(function (err) {
                        return err;
                    })
            }

            deferred.resolve();

            return deferred.promise;
        }

        function _setDataStepModel(data) {
            if (data.businessMindset) {
                for (var key in data.businessMindset) {
                    var sref = 'mindset.' + key;
                    var step = steps.find(function (item) {
                        return item.sref === sref;
                    });

                    if(step) {
                        if (Array.isArray(data.businessMindset[key]) && data.businessMindset[key].length <= 0) {
                            step.model.data = null;
                        } else {
                            step.model.data = data.businessMindset[key];
                        }
                    }
                }
            }

            if(data.statement) {
                for (var key in data.statement) {
                    var sref = 'statement.' + key;
                    var step = steps.find(function (item) {
                        return item.sref === sref;
                    });

                    if(step) {
                        if (Array.isArray(data.statement[key]) && data.statement[key].length <= 0) {
                            step.model.data = null;
                        }
                        step.model.data = data.statement[key];
                    }
                }
            }

            if(data.idealClient) {
                for (var key in data.idealClient) {
                    var sref = 'idealClient.' + key;
                    var step = steps.find(function (item) {
                        return item.sref === sref;
                    });

                    if(step) {
                        if (Array.isArray(data.idealClient[key]) && data.idealClient[key].length === 0) {
                            step.model.data = null;
                        }
                        step.model.data = data.idealClient[key];
                    }
                }
            }
        }

        function isFinished(index) {
            return finishedSteps.indexOf(index) === -1 ? false : true;
        }

        function getActiveStep() {
            return activeStep;
        }

        function getNextAndPrevStep() {
            return {
                prevStep: prevStep,
                nextStep: nextStep
            }
        }

        function updateActiveModel(data) {
            for (var prop in data) {
                if (data.hasOwnProperty(prop) && activeStep.model.hasOwnProperty(prop)) {
                    activeStep.model[prop] = data[prop];
                }
            }
        }

        function setFinishActiveStep() {
            if (finishedSteps.indexOf(activeStepIndex) === -1) {
                finishedSteps.push(activeStepIndex);
            }
        }

        function getAllSteps() {
            return steps;
        }

        function getFinishedStepsAPI() {
            return apiService.rest.one('getFinishedUserStep').get();
        }

        function getPrevStep(index) {
            if (index > 0) {
                return steps[index - 1];
            }
            return null;
        }

        function getNextStep(index) {
            if (index < steps.length - 1) {
                return steps[index + 1];
            }

            return null;
        }

        function checkStepsIsFinishedSection(stepsGroup, prevNameStep) {
            if (stepsGroup[stepsGroup.length - 1].sref === prevNameStep) return true;

            var lastStepGroupIndex = steps.findIndex(function (item) {
                return item.sref === stepsGroup[stepsGroup.length - 1].sref; //TODO:bottleneck
            });

            return finishedSteps.find(function (item) {
                return item === lastStepGroupIndex;
            })
        }
    }
}());