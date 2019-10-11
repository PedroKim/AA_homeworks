class Map
    def initialize
       @storage = Array.new { Array.new }
    end

    def set(key, value)
        storage << [key, value] if storage.none? { |slot| slot.first == key }
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
        storage.to_h
    end

    private
    attr_reader :storage
end