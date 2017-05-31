(function () {
    'use strict';

    angular
        .module('app.services')
        .service('asideService', asideService);

    /* @ngInject */
    function asideService() {
        var businessMindset = [
            {
                name: 'Our Commitment To You',
                sref: 'mindset.ourCommitment'
            }, {
                name: 'Your Commitment to Us',
                sref: 'mindset.yourCommitment'
            }, {
                name: 'Get the Businessmindset',
                sref: 'mindset.businessMindset'
            }, {
                name: 'Privilege and Responsibility',
                sref: 'mindset.privilegeAndResponsibility'
            }, {
                name: 'Are You Stuck?',
                sref: 'mindset.areYourStuck'
            }, {
                name: 'Cashflow / Capacity Cath 22',
                sref: 'mindset.cashFlow'
            }, {
                name: 'Your Business With / Without A Business',
                sref: 'mindset.yourBusiness'
            }, {
                name: 'Top Down, Bottom Up',
                sref: 'mindset.topDownBottomUp'
            }, {
                name: 'Start Business\'n!',
                sref: 'mindset.startBusinessn'
            }, {
                name: 'Your Business Start Date',
                sref: 'mindset.businesStartDate'
            }
        ];

        var businessStatement = [
            {
                name: 'Businessstatement Overview',
                sref: 'statement.overview'
            },
            {
                name: 'businessstatement Q&A',
                sref: 'statement.qa'
            },
            {
                name: 'Your businessstatement',
                sref: 'statement.yourStatement'
            },
            {
                name: 'Commit To Your',
                sref: 'statement.commitToYour'
            },
            {
                name: 'BusinessStatement',
                sref: 'statement.statement'
            },
            {
                name: 'Step 1 businesssummary',
                sref: 'statement.step1Summary'
            }
        ];

        var yearGoals = [
            {
                name: '1 Year Goal Overview',
                sref: 'yearGoal.overview'
            }, {
                name: 'Personal Expenses',
                sref: 'yearGoal.personalExpenses'
            }, {
                name: 'Fixed Business Expenses',
                sref: 'yearGoal.fixedBusinessExpenses'
            }, {
                name: 'Total Fixed Expenses Revenue',
                sref: 'yearGoal.totalFixedExpensesRevenue'
            }, {
                name: 'Selling Price',
                sref: 'yearGoal.sellingPrice'
            }, {
                name: 'Variable Business Expenses',
                sref: 'yearGoal.variableBusinessExpenses'
            }, {
                name: 'Profit Margin',
                sref: 'yearGoal.profitMargin'
            }, {
                name: 'Revenue Breakdown',
                sref: 'yearGoal.revenueBreakdown'
            }, {
                name: 'Your 1 Year Goal',
                sref: 'yearGoal.yourYearGoal'
            }, {
                name: 'Adjust your 1 Year Goal',
                sref: 'yearGoal.adjustYourYearGoal'
            }, {
                name: '1 Year Goal Q&A',
                sref: 'yearGoal.qa'
            }, {
                name: 'Commit To Your 1 Year Goal',
                sref: 'yearGoal.commitYourYearGoal'
            }, {
                name: 'Step 2 BUSINESSsummary',
                sref: 'yearGoal.step2Summary'
            }, {
                name: 'First BUSINESSexpert Review',
                sref: 'yearGoal.firstExpertReview'
            }
        ];

        var idealClients = [
            {
                name: 'Ideal Client Overview',
                sref: 'idealClient.overview'
            },
            {
                name: 'Who Are Your Ideal Clients?',
                sref: 'idealClient.whoAreYouIdealClient'
            },
            {
                name: 'Define Your Ideal Client',
                sref: 'idealClient.defineYourIdealClient'
            },
            {
                name: 'Name Your Ideal Client',
                sref: 'idealClient.nameYourIdealClient'
            },
            {
                name: 'Ideal Client Q&A',
                sref: 'idealClient.qa'
            },
            {
                name: 'Commit To Your Ideal Client',
                sref: 'idealClient.commitYourIdealClient'
            },
            {
                name: 'Double Check',
                sref: 'idealClient.doubleCheck'
            },
            {
                name: 'BUSINESSstatement',
                sref: 'idealClient.businessStatement'
            },
            {
                name: 'Step 3 BUSINESSsummary',
                sref: 'idealClient.step3Summary'
            }
        ];

        var actionPlans = [
            {
                name: 'Action Plan Overview',
                sref: 'actionPlan.overview'
            }, {
                name: 'The World Around You',
                sref: 'actionPlan.worldAroundYou'
            }, {
                name: 'Double Check Start Date',
                sref: 'actionPlan.doubleCheckStartDate'
            }, {
                name: 'What\'s Happening in Q1-Q4',
                sref: 'actionPlan.whatsHappening'
            }, {
                name: 'Rate the 10 Connecting Strategies',
                sref: 'actionPlan.rateConnectingStrategies'
            }, {
                name: 'Choose Your Connecting Strategies',
                sref: 'actionPlan.chooseYourConnectingStrategies'
            }, {
                name: 'Connecting Strategy Strategizing',
                sref: 'actionPlan.connectingStrategyStrategizing'
            }, {
                name: 'Action Items',
                sref: 'actionPlan.actionItems'
            }, {
                name: 'Action Plan Review',
                sref: 'actionPlan.actionPlanReview'
            }, {
                name: 'Quarterly Goals',
                sref: 'actionPlan.quarterlyGoals'
            }, {
                name: 'Double Check 1 Year Goal',
                sref: 'actionPlan.doubleCheckYearGoal'
            }, {
                name: 'Action Plan Q&A',
                sref: 'actionPlan.qa'
            }, {
                name: 'Commit To Your Action Plan',
                sref: 'actionPlan.commitYourActionPlan'
            }, {
                name: 'Step 4 BUSINESSsummary',
                sref: 'actionPlan.step4Summary'
            }, {
                name: 'Second BUSINESSexpert Review',
                sref: 'actionPlan.secondExpertReview'
            }
        ];

        var execute = [
            {
                name: 'Living BUSINESS Day-to-Day',
                sref: 'execute.livingDayToDay'
            }, {
                name: 'Commit to Yourself',
                sref: 'execute.commitYourSelf'
            }, {
                name: 'Set Yourself Up For Success',
                sref: 'execute.setYourselfUpForSuccess'
            }, {
                name: 'Tour of BUSINESScenter - Execute',
                sref: 'execute.tourExecute'
            }
        ];

        this.getAll = getAll;

        ////////////////////////
        function getAll() {
            return {
                businessStatement: businessStatement,
                businessMindset: businessMindset,
                yearGoals: yearGoals,
                idealClients: idealClients,
                actionPlans: actionPlans,
                execute: execute
            };
        }
    }
}());