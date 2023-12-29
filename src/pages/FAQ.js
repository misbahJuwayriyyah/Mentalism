import '../Css/style.css';
import '../Css/faq.css';
import React, { useEffect } from 'react';
const HelpPage = () => {
    useEffect(() => {
        //FAQ SECTION

        const toggleBtn = document.querySelectorAll('.toggle-btn');
        const faqAns = document.querySelectorAll('.faq-answer');
        const faqQuestion = document.querySelectorAll('.faq-question--text');

        for (let i = 0; i < toggleBtn.length; i++) {
            console.log('click');
            toggleBtn[i].onclick = function () {

                for (let j = 0; j < toggleBtn.length; j++) {
                    if (toggleBtn[j] != this) {
                        toggleBtn[j].classList.remove('rotated');
                        faqAns[j].classList.add("hidden");
                        faqQuestion[j].classList.remove("active");
                    }
                }
                faqAns[i].classList.toggle("hidden");
                toggleBtn[i].classList.toggle("rotated");
                faqQuestion[i].classList.toggle("active");
            };
        }

    }, []);

    return (<>
        <body style={{backgroundRepeat:"repeat"}}>
            <div className="container">
                <div className="header">
                    <h1>FAQ</h1>
                    <p>Frequently Asked Questions About Mental Health</p>
                </div>

                <div className="faq-section">
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">1. What is a mental illness?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Mental illness refers to a wide range of mental health conditions or disorders that affect a person's mood,
                            thinking and behavior.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">2. What causes mental illness?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            It is becoming clear through research that many of these conditions are caused by a combination of
                            biological, psychological, and environmental factors.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">3. What Biological Factors Are Involved in Mental Illness?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Some biological factors that may be involved in the development of mental illness include: Neurochemical
                            Causes: Some mental illnesses have been linked to an abnormal balance of special chemicals in the brain
                            called neurotransmitters. Neurotransmitters help nerve cells in the brain communicate with each other. If
                            these chemicals are out of balance or are not working properly, messages may not make it through the brain
                            correctly, leading to symptoms of mental illness. In addition, defects in or injury to certain areas of the
                            brain have also been linked to some mental conditions. Genetics (heredity): Many mental illnesses run in
                            families, suggesting that people who have a family member with a mental illness are more susceptible (have a
                            greater likelihood of being affected) to developing a mental illness. Infections: Certain infections have
                            been linked to brain damage and the development of mental illness or the worsening of its symptoms.
                            Structural Causes: This involves possible problems in the "wiring" of different parts of the brain. This
                            includes possible consequences from brain trauma.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">4. What Psychological Factors Contribute to Mental Illness?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Psychological factors that may contribute to mental illness include specific vulnerabilities such as
                            personality traits, particular extremes in temperament features, specific sensitivities to negative
                            emotions, cognitive susceptibility, dysfunctional attitudes, hopelessness, negative distortions.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">5. What Environmental Factors Contribute to Mental Illness?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Certain triggering factors could be significant stressors precipitating a mental illness such as: Losses
                            experiences (physical loss after a trauma, loss of significant others, separation, etc… Chronic threats,
                            Long-term exposure to traumatic conditions, Harmful family dynamic • Living in extreme deprivation and
                            poverty • Alcohol and substance misuse • Severe neglect • War, natural disasters, accidents, etc… • Chronic
                            pain and incapacitating chronic illness • Social discrimination for example towards minorities
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">6. Can mental illness be prevented?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Most mental illnesses are caused by a combination of factors. However, some preventive measures can decrease
                            the likelihood of developing mental illnesses. The concept of attributable risk has gained ground in mental
                            health research and factors that are related to those can be potentially reduced to somehow prevent mental
                            illnesses: prevent neglect and abuse in childhood , prevent substance abuse , prevent exposure to war ,
                            increase social support , decrease burden of other health disorders , train in management of stress etc...
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">7. Once someone has had a mental illness can they ever get better again?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            According to the disorder, treatment can help the client in getting better and in some cases, full recovery
                            can be achieved through adequate treatment.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">8. How common are mental illnesses?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Mental illnesses are very common. In fact according to studies done by IDRAAC, 1 out 4 Lebanese adults is at
                            risk of developing a mental disorder before the age of 75 years and this varies by countries. Lebanon seems
                            to be in the medium range.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">9. What are some of the warning signs of mental illness?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Symptoms of mental disorders vary depending on the type and severity of the condition. Some general symptoms
                            that may suggest a mental illness include: Problems in concentration Long-lasting sadness or irritability
                            Recurrent changes in energy Extremely high and low moods Excessive fear, worry, or anxiety Social withdrawal
                            Dramatic changes in eating or sleeping habits Strong feelings of anger Delusions or hallucinations (seeing
                            or hearing things that are not really there) Increasing inability to cope with daily problems and activities
                            Suicidal thoughts Many unexplained physical problems Confused thinking Abuse of drugs and/or alcohol
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">
                                10. What should I do if I know someone who appears to have all of the symptoms of a serious mental
                                disorder?
                            </h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            If you know someone who is having symptoms of a mental disorder, do not just think that they will snap out
                            of it. Notify a family member, a mental health professional, and a counselor if you think a friend or family
                            member has symptoms of a mental disorder.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">11. What is the difference between a psychiatrist and a psychologist?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            While both psychiatrists and psychologists are mental health professionals, the big difference is that
                            psychiatrists are medical physicians while psychologists are not. Because they are licensed physicians,
                            psychiatrists can prescribe drugs. Psychologists are not allowed to do that. Psychologists on the other
                            hand, use psychotherapy as a treatment method.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">12. What treatment options are available?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Treatment options include psychotherapy, pharmacotherapy, a combination of both as well as electroconvulsive
                            therapy. Treatments can be administered in inpatient and outpatient settings.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">
                                13. If I begin to feel better after taking it, is it okay to stop taking it?
                            </h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            It is common for people to stop taking their medication when they feel their symptoms have become
                            controlled. Others may choose to stop their medication because of side effects. Another problem with
                            stopping medication, especially if you stop it abruptly, is that you may develop withdrawal symptoms that
                            can be very unpleasant. If you doctor feel you need to stop your medication, it is necessary to discuss it
                            with your physician as he might be able to suggest another type of medication or adjust the dose of your
                            medication.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">14. Is psychotherapy a substitute for medication?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Psychotherapy in some cases can be sufficient for the treatment of certain mental conditions. However, it
                            may be needed in conjunction with medication. This is why in several cases, it is not considered as a
                            substitute for medication.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">15. What should I do if I'm worried about a friend or relative?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            This may depend on your relationship with them. Gently encouraging someone to seek appropriate support would
                            be helpful to start with.
                        </p>
                    </div>
                    <div className="faq-card">
                        <div className="faq-question">
                            <h3 className="faq-question--text">16. How do I deal with someone telling me what to do?</h3>
                            <button className="toggle-btn"><i className="fas fa-chevron-down arrow"></i></button>
                        </div>
                        <p className="faq-answer hidden">
                            Some people may advise you on good evidence of what works with the best of intentions, but it's important to
                            find out what works best for you.
                        </p>
                    </div>

                    <button className="back-btn"><a href="/gethelp">Go Back</a></button>
                </div>

                <footer className="footer" style={{marginLeft:"-80px"}}><p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p></footer>
            </div>
        </body>

    </>);
};

export default HelpPage;