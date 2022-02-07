<script lang="ts">
  export const value: string = ""

  // https://ricardometring.com/javascript-replace-special-characters
  const replaceSpecialChars = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Removes all occurrences of diacritical characters
      .replace(/([^\w]+|\s+)/g, "-") // Replace space and other characters by hyphen
      .replace(/\-\-+/g, "-") // Replaces multiple hyphens by one hyphen
      .replace(/(^-+|-+$)/, "") // Remove extra hyphens from beginning or end of the string
  }
</script>

<label for="ex3-input" id="ex3-label" class="combobox-label">
  Choice 3 Fruit or Vegetable
</label>
<div class="combobox-wrapper">
  <div
    role="combobox"
    aria-expanded="false"
    aria-owns="ex3-listbox"
    aria-haspopup="listbox"
    id="ex3-combobox"
  >
    <input
      type="text"
      aria-autocomplete="both"
      aria-controls="ex3-listbox"
      aria-labelledby="ex3-label"
      id="ex3-input"
    />
    <div
      class="combobox-dropdown"
      id="ex3-combobox-arrow"
      tabindex="-1"
      role="button"
      aria-label="Show vegetable options"
    >
      <img src="imgs/arrow_drop_down_grey_27x27.png" alt="" />
    </div>
  </div>
  <ul
    aria-labelledby="ex3-label"
    role="listbox"
    id="ex3-listbox"
    class="listbox hidden"
  />
</div>
