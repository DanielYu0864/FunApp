import React from 'react';

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.children = props.children;
        this.css = 'category';
        if (props.css) this.css += ` ${props.css}`;

        this.align = props.align ? ` ${props.align}` : '';
    }

    render() {
        
        return (
            <section className={this.css}>
                <div className={`category__container${this.align}`}>
                    {this.children}
                </div>
            </section>
        )

    }

}