const nation = document.getElementsByClassName("nation");

if (document.body.offsetWidth > 1200) {
    for (let i = 0; i < nation.length; i += 1) {
        const rnd = Math.floor(Math.random() * 4);

        if (rnd == 0) {
            const animation1 = nation[i].animate([
                {
                    backgroundPosition: "0% 0%",
                    backgroundSize: "150%"
                },
                {
                    backgroundPosition: "50% 50%",
                    backgroundSize: "175%"
                }
            ], {
                duration: 5000,
                easing: "ease",
                iterations: Infinity,
            });
        }
        else if (rnd == 1) {
            const animation2 = nation[i].animate([
                {
                    backgroundPosition: "0% 0%",
                    backgroundSize: "150%"
                },
                {
                    backgroundPosition: "50% 50%",
                    backgroundSize: "175%"
                }
            ], {
                duration: 5000,
                easing: "ease",
                iterations: Infinity,
            });
        }
        else if (rnd == 2) {
            const animation3 = nation[i].animate([
                {
                    backgroundPosition: "0% 0%",
                    backgroundSize: "150%"
                },
                {
                    backgroundPosition: "50% 50%",
                    backgroundSize: "175%"
                }
            ], {
                duration: 5000,
                easing: "ease",
                iterations: Infinity,
            });
        }
        else {
            const animation4 = nation[i].animate([
                {
                    backgroundPosition: "100% 100%",
                    backgroundSize: "150%"
                },
                {
                    backgroundPosition: "0% 0%",
                    backgroundSize: "175%"
                }
            ], {
                duration: 5000,
                easing: "ease",
                iterations: Infinity,
            });
        }
    }
}