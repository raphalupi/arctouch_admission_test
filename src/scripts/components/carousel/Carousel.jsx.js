import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

const styles = StyleSheet.create({
    content: {
        margin: '0 auto',
        maxWidth: '1200px'
    },

    pageIndicator: {
        width: '15px',
        height: '15px',
    },

    slidesWrapper: {
        minHeight: '150px',
    },

    slideWrapper: {
        transition: 'opacity 0.5s ease',
    },
});

const classes = {
    wrapper: classnames(),
    content: classnames(
        css(styles.content),
        'w-80-l',
        'w-90-m',
        'ph3',
        'ph0-ns',
        'pv4',
        'pt5-l',
        'tc'
    ),

    slidesWrapper: classnames(
        'pb4',
        'relative',
        css(styles.slidesWrapper)
    ),

    slideWrapper: classnames(
        css(styles.slideWrapper),
        'absolute',
        'left-0',
        'right-0'
    ),

    message: classnames(
        'gray',
        'f3-ns',
        'f4',
        'fw3',
        'pb3',
        'i'
    ),
    author: classnames(
        'f5',
        'fw6'
    ),

    pageIndicator: classnames(
        css(styles.pageIndicator),
        'dib',
        'mh1',
        'br4',
        'bw1',
        'b--solid',
        'b--blue',
        'bg-white',
        'pointer'
    ),
    pageSelected: classnames(
        'bg-blue'
    ),
};

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            totalSlides: 0,
            slides: [],
        };

        this.autoAdvance = null;

        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.handleSlideClick = this.handleSlideClick.bind(this);
        this.selectSlide = this.selectSlide.bind(this);
        this.removeAutoAdvance = this.removeAutoAdvance.bind(this);
    }

    componentDidMount() {
        const slides = [{
            message: 'Craze is one of the most complete app packages I have ever come across. I would highly reccomend it to anyone!',
            author: 'Sarah Hunt',
        }, {
            message: 'Omae wa mou shindeiru!',
            author: 'NANI?!',
        }, {
            message: 'Yet another Orkut testimonial',
            author: 'Orkut Büyükkökten',
        }];

        this.setState({
            slides,
            totalSlides: slides.length,
        }, () => {
            this.autoAdvance = setInterval(this.goToNextSlide, 4000);
        });
    }

    goToNextSlide() {
        const { currentSlide, totalSlides } = this.state;
        const slideToGo = (currentSlide + 1) % (totalSlides);
        this.selectSlide(slideToGo);
    }

    handleSlideClick(slide) {
        this.removeAutoAdvance();
        this.selectSlide(slide);
    }

    selectSlide(slide) {
        this.setState({
            currentSlide: slide,
        });
    }

    removeAutoAdvance() {
        if (this.autoAdvance) {
            clearInterval(this.autoAdvance);
        }
    }

    render() {
        const { slides, currentSlide } = this.state;

        return (
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <div className={classes.slidesWrapper}>
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={classnames(
                                    classes.slideWrapper,
                                    i === currentSlide ? 'o-100' : 'o-0'
                                )}
                            >
                                <div className={classes.message}>
                                    &quot;
                                    {slide.message}
                                    &quot;
                                </div>
                                <div className={classes.author}>{slide.author}</div>
                            </div>
                        ))}
                    </div>
                    <div className={classes.paginationWrapper}>
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                onClick={() => this.handleSlideClick(i)}
                                className={classnames(
                                    classes.pageIndicator,
                                    i === currentSlide && classes.pageSelected
                                )} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
