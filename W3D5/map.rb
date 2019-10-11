class Map
    def initialize
       @storage = Array.new { Array.new }
    end

    def set(key, value)
        existing_slot = storage.find { |slot| slot.first == key }
        if existing_slot != nil
            existing_slot[1] = value
        else
            storage << [key, value]
        end
    end

    def get(key)
        target_slot = storage.find { |slot| slot.first == key }
        target_slot ? target_slot.last : nil
    end

    def delete(key)
        storage.each_with_index do |slot, idx|
            if slot.first == key
                storage.delete(idx)
                break
            end
        end
    end

    def show
        # storage.to_h
        deep_dup(storage)
    end

    private
    attr_reader :storage

    def deep_dup(arr)
        arr.map { |el| el.is_a?(Array) ? deep_dup(el) : el }
    end
end