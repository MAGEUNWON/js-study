function score_analysis(total, three, percent) {
    var threeCount = 3 * three;
    var rest = total - threeCount;
    var two = rest * percent; //18점
    var free = rest * percent; //18점
    var A = two / 2;
    var B = free / 2;
    var C = free;
    var CC = B * 2;
    var D = (C / CC) * 100;
    return "KDT\uD300\uC774 \uC131\uACF5\uD55C 2\uC810 \uC29B\uC740 ".concat(A, ", \uC0C1\uB300\uD300\uC73C\uB85C\uBD80\uD130 \uC790\uC720\uD22C\uB97C \uC5BB\uC740 \uD69F\uC218\uB294 ").concat(B, ", \uCD1D ").concat(C, "\uAC1C\uC758 \uC790\uC720\uD22C\uB97C \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB0A0 KDT\uD300\uC758 \uC790\uC720\uD22C \uC131\uACF5\uB960\uC740 ").concat(D, "% \uC785\uB2C8\uB2E4. ");
}
console.log(score_analysis(84, 16, 0.5));
