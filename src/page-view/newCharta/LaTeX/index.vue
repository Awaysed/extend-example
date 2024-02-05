<template>
    <div>
        <h2>公式</h2>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
            <mfrac>
                <mn>1</mn>
                <mrow>
                    <msup>
                        <mi>n</mi>
                        <mrow>
                            <mn>2</mn>
                        </mrow>
                    </msup>
                    <mo>−</mo>
                    <mn>1</mn>
                </mrow>
        </mfrac>
        <mo>=</mo>
        <mfrac>
            <mn>1</mn>
            <mn>2</mn>
        </mfrac>
        <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">(</mo>
            <mfrac>
                <mn>1</mn>
                <mrow>
                    <mi>n</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                </mrow>
            </mfrac>
            <mo>−</mo>
            <mfrac>
                <mn>1</mn>
                <mrow>
                    <mi>n</mi>
                    <mo>+</mo>
                    <mn>1</mn>
                </mrow>
            </mfrac>
            <mo data-mjx-texclass="CLOSE">)</mo>
        </mrow>
        <msub>
            <mi>a</mi>
            <mrow>
                <mi>n</mi>
            </mrow>
        </msub>
        <mo>=</mo>
        <msub>
            <mi>a</mi>
            <mrow>
                <mn>1</mn>
            </mrow>
        </msub>
        <mo>+</mo>
        <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">(</mo>
            <mi>n</mi>
            <mo>−</mo>
            <mn>1</mn>
            <mrow data-mjx-texclass="INNER">
                <mo data-mjx-texclass="OPEN">)</mo>
                <mi>d</mi>
                <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
            </mrow>
            <mo data-mjx-texclass="CLOSE" fence="true" stretchy="true" symmetric="true"></mo>
        </mrow>
    </math>
</div></template>

<script setup lang='ts'>
defineOptions({
    name: ''
})
</script>

<style lang='less' scoped></style>
