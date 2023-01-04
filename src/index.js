const nums1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const nums2 = ['','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const nums3 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const nums4 = 'hundred';


module.exports = function toReadable (number) {
    number = number.toString()
    if (number == 0) {
      return 'zero';
    } else if (number < 10) {
      return nums1[number];
    } else if (number < 20) {
      return nums2[number % 10];
    } else if (number < 100) {
      return nums3[(number - (number % 10))/10] + ' ' + nums1[number % 10]
    } else if (number < 1000 && number[1] < 2) {
      return nums1[(number - (number % 100))/ 100] + ' ' + nums4 + ' ' + nums2[(number % 100) % 10]
    } else if (number < 1000 && number[1] >= 2) {
      return nums1[(number - (number % 100))/ 100] + ' ' + nums4 + ' ' + nums3[((number % 100) - (number % 10))/10] + ' ' + nums1[number % 10]
    }
}
