import React from 'react';
import Navbar from '../Navbar/Navbar';

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.children = props.children;
        this.css = 'category';
        if (props.css) this.css += ` ${props.css}`;

        this.align = props.align ? ` ${props.align}` : '';

        this.navbarColor = props.navbarColor || 'purple';
    }

    render() {
        
        return (
            <main>
                <Navbar color={this.navbarColor} />
                <section className={this.css}>
                    <div className={`category__container${this.align}`}>
                        {this.children}
                    </div>
                </section>
            </main>
        )

    }

}