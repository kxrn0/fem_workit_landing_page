type ItemType = {
  word: string;
  preDelay: number;
};

function map_words(words: string[], millisPerChar: number): ItemType[] {
  return words.reduce<ItemType[]>((result, word, index) => {
    const preDelay =
      index > 0
        ? result[index - 1].preDelay + words[index - 1].length * millisPerChar
        : 0;
    result.push({
      word,
      preDelay,
    });
    return result;
  }, []);
}

const delay = 100;
const cmp: HTMLElement = document.querySelector(".typing-animation")!;
const data = cmp.dataset.text || "Lorem Ipsum Dolor Sit Amet";
const words = data.split(" ");
const split = map_words(words, delay);
const underlay = words.reduce(
  (total, current) => total + current.length * delay,
  0
);

cmp.style.setProperty("--underlay", `${underlay / 1000}s`);

setTimeout(
  () =>
    split.forEach((item, index) => {
      const element = document.createElement("pre");

      if (index === 1) element.classList.add("underlined");

      cmp.append(element);

      item.word
        .split("")
        .forEach((char, index) =>
          setTimeout(
            () => (element.innerText = `${element.innerText}${char}`),
            delay * index + item.preDelay
          )
        );
    }),
  500
);
