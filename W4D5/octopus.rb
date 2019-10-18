fish_arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# Sluggish Octopus
# Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths

def sluggish_octopus(arr)
    longest = ""
    arr.each do |el1|
        arr.each do |el2|
            longest = el1 if el1.length > el2.length
        end
    end
    longest
end

# Dominant Octopus
# Find the longest fish in O(n log n) time. Hint: You saw a sorting algorithm that runs in O(n log n) in the Sorting Complexity Demo. Remember that Big O is classified by the dominant term.
def dominant_octopus(arr)
    sorted = quicksort(arr) { |a, b| a.length <=> b.length }
    longest = sorted.last
end

def quicksort(arr, &prc)
    return arr if arr.length <= 1
    prc ||= Proc.new { |a, b| a <=> b }

    pivot = arr.shift
    left = arr.select {|el| prc.call(el, pivot) == -1 }
    right = arr.select {|el| prc.call(el, pivot) >= 0 }

    quicksort(left, &prc) + [pivot] + quicksort(right, &prc)
end

# Clever Octopus
# Find the longest fish in O(n) time. The octopus can hold on to the longest fish that you have found so far while stepping through the array only once.
def clever_octopus(arr)
    longest = ""
    arr.each {|el| longest = el if el.length >= longest.length}
    longest
end

# Dancing Octopus
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

# Slow Dance
# Given a tile direction, iterate through a tiles array to return the tentacle number (tile index) the octopus must move. This should take O(n) time.
def slow_dance(dir, arr)
    (0...arr.length).each { |idx| return idx if dir == arr[idx] }
end

# Constant Dance!
# Now that the octopus is warmed up, let's help her dance faster. Use a different data structure and write a new function so that you can access the tentacle number in O(1) time.
tiles_hash = { "up" => 0, "right-up" => 1, "right" => 2, "right-down" => 3, "down" => 4, "left-down" => 5, "left" => 6, "left-up" => 7 }
def fast_dance(dir, hsh)
    hsh[dir]
end
    