/*globals define*/
define(
    {
        annotation: {
            quiz: {
                actions: {
                    thanks: 'Thank you message',
                    link: 'Load URL',
                    time: 'Jump to video time',
                    track: 'Load track ID'
                },
                button: {
                    cancel: 'Annuler',
                    back: 'Back',
                    next: 'Suivant',
                    done: 'OK',
                    submit: 'Répondre',
                    save: 'Save',
                    new_choice: 'Choice',
                    new_input: 'Input',
                    previous_page: 'Prev',
                    next_page: 'Next',
                    show_answer: 'Afficher RÃ©ponse',
                    retry: 'Retry'
                },
                menu: {
                    new_item: {
                        new_question: 'Question'
                    },
                    set_option: {
                        menu_label: 'Options',
                        cancel: 'Show cancel button',
                        passFail: 'Pass/Fail actions',
                        submit: 'Submit',
                        question: 'Answer types',
                        reviewScreen: 'Review screen'
                    }
                },
                text: {
                    label: {
                        answer: 'Correct answer',
                        page: 'Page',
                        of: 'of',
                        out_of: 'out of',
                        correct: 'correct',
                        incorrect: 'incorrect'
                    },
                    placeholder: {
                        new_question: 'Enter  Question',
                        new_choice: 'Enter  Answer',
                        new_input: 'Enter  Correct Text Answer'
                    },
                    title: {
                        thanks: 'Enter Thank You Text'
                    },
                    warning: {
                        delete_page: 'Are you sure you want to delete the current page?'
                    }
                },
                dialog: {
                    passFail: {
                        actions: {
                            link: 'Load URL',
                            threshold: 'Set custom pass/fail threshold',
                            time: 'Jump to video time',
                            track: 'Load track ID',
                            passingMark: 'Passing score',
                            reset: 'Reset questions',
                            pause: 'Pause video on click',
                            javascript: 'JavaScript'
                        },
                        tabs: {
                            fail: 'On Fail',
                            pass: 'On Pass'
                        },
                        title: 'Pass/Fail Actions'
                    },
                    onSubmit: {
                        actions: {
                            retry: 'Allow retry',
                            show_answer: 'Allow viewer to see correct answer(s)',
                            thanks: 'Message',
                            review: 'Show review screen'
                        },
                        title: 'Review Screen'
                    },
                    questions: {
                        actions: {
                            multipleAnswers: 'Allow multiple correct choices per question',
                            multipleRequired: 'Require all correct answers to be chosen'
                        },
                        thankYouText: 'Review your answers',
                        reviewScreenMessage: 'Review screen message',
                        title: 'Review Screen'
                    }
                }
            }
        },
        overlay: {
            common: {
                button: {
                    cancel: 'Cancel',
                    ok: 'OK',
                    submit: 'Répondre'
                }
            },
            action: {
                chapter_text: {
                    title: 'Text'
                },
                comment_text: {
                    title: 'Text'
                },
                delete_annotation: {
                    title: 'Delete Annotation',
                    message: 'Are you sure you want to delete this annotation?'
                },
                set_duration: {
                    title: 'Set  Duration',
                    text: {
                        label: {
                            maxDuration: 'Stay active until end of video',
                            hours: 'Hours',
                            minutes: 'Minutes',
                            seconds: 'Seconds'
                        }
                    }
                }
            }
        }
    }
);